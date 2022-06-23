const express = require('express');
const{allUsers, singleUser, login} = require('../controllers/controllers')


const router = express.Router();

router.route('/').get(allUsers);

router.route('/users/:id').get(singleUser);

// router.post('/login', login)

module.exports =  router ;