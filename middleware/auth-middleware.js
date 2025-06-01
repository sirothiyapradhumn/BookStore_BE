
const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied, not have token, please login again",
    })
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userInfo = decodeToken;
    console.log(req.userInfo);
    next();
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }

};

module.exports = authMiddleWare;