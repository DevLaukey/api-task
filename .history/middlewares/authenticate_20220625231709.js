exports.authorize = function (req, res, next) {

  if (req.query.admin) {
    next();
  } else {
    res.send("You are not allowed");
  }
};
