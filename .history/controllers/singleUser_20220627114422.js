const usersData = require("../MOCK_DATA.json");

exports.singleUser = (req, res) => {
  const { email } = req.params;
  const user = data.find((user) => user.email === email);

  if (user) {
    const response = {
      Status: 200,
      Success: true,
      Message: "Acquired successfully",
      Data: [usersData[id]],
    };
    res.send(response).status(200);
  } else {
    const failure = {
      Status: 404,
      Success: false,
      Message: "Not found",
      Data: [],
    };
    res.send(failure).status(404);  
  }
};
