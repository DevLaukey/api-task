const usersData = require("../MOCK_DATA.json");

exports.allUsers = (req, res) => {
  const success = {
    "Status": 200,
    "Success": true,
    "Message": "Acquired successfully",
    "Data": usersData
  }

  const error = {
    "Status": 404,
    "Success": false,
    "Message": "Not found",
    "Data": []
  }
  usersData ?res.send(success) : res.send(failure);


  res.status(200).json(usersData);
};
