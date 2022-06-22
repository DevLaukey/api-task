const express = require('express');
const usersData   = require('./MOCK_DATA.json')

const {allUsers } = require('./routes/routes')

const app = express();

const port = process.env.PORT || 3000;

app.get(
  "/",
(req, res) => {
    res.status(200).json(usersData);
  });


app.get('/users/:id', (req, res) => {
     const id = req.params.id;
     if (id && usersData[id]) {
       res.send(usersData[id]);
       res.status(200).send();
     } else {
       // Not Found
       res.status(404).send();
     }
})

app.listen(port, ()=>{console.log(`running port: ${port}, ${usersData.map(user=>user.id )}`)})