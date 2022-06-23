const express = require('express');
const{allUsers, singleUser, login} = require('../controllers/controllers')


const router = express.Router();

router.use('/', allUsers)

router.get('/users/:id', singleUser)

router.post('/login', login)

module.exports = { router };