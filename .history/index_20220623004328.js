const express = require('express');
const users = require('./MOCK_DATA.json')

const { router } = require('./routes/routes')

const app = express();

const port = process.env.PORT || 3000;

app.use(router )


app.listen(port, ()=>{console.log(`running port: ${port}`)})