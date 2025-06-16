const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true
  },
  publicId: {
    type: String,
    require: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  }
});

module.exports = mongoose.model("Image", imageSchema);