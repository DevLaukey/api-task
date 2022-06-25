const express = require("express");
const singleUser= require("./routes/getSingleUser");
const allUsers = require("./routes/getUsers");
const usersData = require("./MOCK_DATA.json");

const app = express();

const port = process.env.PORT || 3000;

app.use("/", allUsers);

app.use("/", singleUser);


app.
// app.get("/login", function (req, res) {
//   const id = req.params.id;
//   if (id && usersData[id]) {
//     res.send(usersData[id]);
//     res.status(200).send();
//   } else {
//     // Not Found
//     res.status(404).send();
//   }
// });

app.listen(port, () => {
  console.log(`running port: ${port}, ${usersData.map((user) => user.id)}`);
});
