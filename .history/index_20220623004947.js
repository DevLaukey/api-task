const express = require('express');
const users = require('./MOCK_DATA.json')

const {allUsers } = require('./routes/routes')

const app = express();

const port = process.env.PORT || 3000;

app.get(
  "/",
  users.get("/user", (req, res) => {
    res.status(200).json(data);
  })
);


app.listen(port, ()=>{console.log(`running port: ${port}, ${users.map(user=>user.id )}`)})