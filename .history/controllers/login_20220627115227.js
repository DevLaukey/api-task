const usersData = require("../MOCK_DATA.json");

exports.login = (req, res) => {
  const { email, Password } = req.body;
  const user = usersData.find((user) => user.email === email);
  if (user && user.Password === Password) {
    return res.json({
      status: 200,
      success: true,
      message: "Logged in successfully",
      results: user,
    });
  }

  res.status(403).json({
    status: 404,
    success: false,
    message: "Wrong credentials",
    results: {},
  });
};
