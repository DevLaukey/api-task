const users = require("../MOCK_DATA.json");
// const fs = require("fs")
module.exports = {
  allUsers: (req, res) => {
    // fs.readFile("../MOCK_DATA.json");
        console.log(users);
        res.json(users);
        res.status(200).send();
  },
    singleUser: (req, res) => {
       const id = req.params.userId;
       if (id && usersData[id]) {
         res.send(usersData[id]);
         res.status(200).send();
       } else {
         // Not Found
         res.status(404).send();
       }
  },
  login: () => {},
};
