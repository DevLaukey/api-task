const express = require('express');
const{allUsers, singleUser, login} = require('../controllers/allUsers')


const router = express.Router();

router.route('/').get(allUsers);

router.route('/users/:id').get(singleUser);

// router.post('/login', login)

module.exports =  router ;