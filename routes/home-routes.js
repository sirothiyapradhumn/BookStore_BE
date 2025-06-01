const express = require('express');
const authMiddleWare = require('../middleware/auth-middleware');
const router = express.Router();

router.get('/welcome', authMiddleWare, (req, res) => {

  const { userId, username, role} = req.userInfo;
  res.json({
    message: "welcome to home page",
    user: {
      userId,
      username,
      role,
    }
  })
})

module.exports = router;