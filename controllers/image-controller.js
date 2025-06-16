const Image = require("../models/image");
// const cloudinary = require('../config/cloudinary');
const { uploadToCloudinary } = require("../helper/cloudinaryHelper");

const uploadImageController = async (req, res) => {
  try {
    //check if file is missing in req obj
    if(!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image"
      })
    }

    //upload a cloudinary
    const { url, publicId} = await uploadToCloudinary(req.file.path);

    // store the image URL to MongoDB
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    })

    await newlyUploadedImage.save();

    res.status(201).json({
      success: true,
      message: "Imaged uploaded successfully",
      image: newlyUploadedImage,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again."
    })
  }
};

module.exports = {
  uploadImageController
};