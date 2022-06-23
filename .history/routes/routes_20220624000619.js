const express = require('express');
const{allUsers, singleUser, login} = require('../controllers/controllers')


const router = express.Router();

router.get('/', allUsers)

router.get('/users/:id', singleUser)

router.post('/login', login)

module.exports = { router };