const usersData = ]
exports.allUsers = (req, res) => {
  const success = {
    "Status": 200,
    "Success": true,
    "Message": "Acquired successfully",
    "Data": usersData
  }

  const failure = {
    "Status": 404,
    "Success": false,
    "Message": "Not found",
    "Data": []
  }
  usersData ?res.send(success) : res.send(failure);


};
