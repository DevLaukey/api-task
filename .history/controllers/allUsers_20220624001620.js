const usersData = require("../MOCK_DATA.json");

exports.allUsers = (req, res) => {
  res.status(200).json(usersData);
};
