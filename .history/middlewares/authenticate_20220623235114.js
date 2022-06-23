exports.authorize = function (req, res, next) {
  console.log("this is a middleware");

  if (req.query.admin) {
    next();
  } else {
    res.send("You are not allowed");
  }
};
