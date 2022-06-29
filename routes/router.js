const express = require("express");
const { allUsers, home , login, singleUser, create} = require("../controllers/usersController");


const router = express.Router();

router.get('/', home)
router.get("/users",allUsers);
router.get("/users/:email",singleUser);
router.post("/login", login);
router.post("/register", create);

module.exports = router;
