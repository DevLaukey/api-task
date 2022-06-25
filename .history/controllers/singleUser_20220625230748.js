const usersData = require("../MOCK_DATA.json");

exports.singleUser = (req, res) => {
  const id = req.params.id;
  if (id && usersData[id]) {
    const response = {
      "Status": 200,
      "Success": true,
      "Message": "Acquired successfully",
      "Data": usersData[id]
    }
    res.send(response);
  } else {
    // Not Found
    res.status(404).send();
  }
};
