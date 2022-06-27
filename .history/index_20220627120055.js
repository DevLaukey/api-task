const express = require("express");
const singleUser = require("./routes/getSingleUser");
const allUsers = require("./routes/getUsers");
const login = require("./routes/login");
("./routes/getUsers");
const usersData = require("./MOCK_DATA.json");

const app = express();

const port = process.env.PORT || 3000;

app.use("/", allUsers);

app.use("/", singleUser);

app.use("/", login);
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status,
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`running port: ${port}`);
});
