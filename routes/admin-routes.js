const express = require("express");
const authMiddleWare = require("../middleware/auth-middleware");
const isAdminMiddleware = require("../middleware/isAdmin-middleware");
const router = express.Router();

router.get("/welcome", authMiddleWare, isAdminMiddleware, (req, res) => {
  const { userId, username, role } = req.userInfo;
  res.json({
    message: "welcome to Admin page",
    user: {
      userId,
      username,
      role,
    },
  });
});

module.exports = router;
