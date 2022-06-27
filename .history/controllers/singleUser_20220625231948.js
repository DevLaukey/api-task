const usersData = require("../MOCK_DATA.json");

exports.singleUser = (req, res) => {
  const id = req.body.id;
  if (id && usersData[id]) {
    const response = {
      "Status": 200,
      "Success": true,
      "Message": "Acquired successfully",
      "Data": [usersData[id]]
    }
    res.send(response);
  } else {
      const failure = {
        Status: 404,
        Success: false,
        Message: "Not found",
        Data: [],
      };
    res.send(failure);
  }
};
