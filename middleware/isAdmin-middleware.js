
const isAdminMiddleware = (req, res, next) => {
  if(req.userInfo.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied !!, Required Admin Access",
    })
  }
  next();
}

module.exports = isAdminMiddleware;