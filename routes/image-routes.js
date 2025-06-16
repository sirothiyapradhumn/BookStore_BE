const express = require("express");
const authMiddleWare = require("../middleware/auth-middleware");
const isAdminMiddleware = require("../middleware/isAdmin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware");
const { uploadImageController } = require("../controllers/image-controller");
const router = express.Router();

router.post(
  "/upload",
  authMiddleWare,
  isAdminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

module.exports = router;
