const users = require("../MOCK_DATA.json");

module.exports = {
  allUsers: (req, res) => {
        console.log(users);
        res.json(users);
    res.json(req.body).status(200).send();
  },
  singleUser: () => {},
  login: () => {},
};
