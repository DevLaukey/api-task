const users = require("../MOCK_DATA.json");

module.exports = {
  allUsers: (req, res) => {
        console.log(users);
        res.json(users);
        res.status(200).send();
  },
    singleUser: (req, res) => {
       const id = req.params.userId;
       if (id && usersData[id]) {
         res.json(usersData[id]);
         res.status(200).send();
       } else {
         // Not Found
         res.status(404).send();
       }
  },
  login: () => {},
};
