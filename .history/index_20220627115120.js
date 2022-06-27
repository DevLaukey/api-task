const express = require("express");
const singleUser= require("./routes/getSingleUser");
const allUsers = require("./routes/getUsers");
const login = require("./routes/login");("./routes/getUsers");
const usersData = require("./MOCK_DATA.json");


const app = express();

const port = process.env.PORT || 3000;

app.use("/", allUsers);

app.use("/", singleUser);

app.use("/", login);

app.listen(port, () => {
  console.log(`running port: ${port}`);
});
