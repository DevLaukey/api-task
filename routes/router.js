const express = require("express");
const { allUsers } = require("../controllers/allUsers");
const { login } = require("../controllers/login");
const { singleUser } = require("../controllers/singleUser");

const router = express.Router();


router.get("/users",allUsers);
router.get("/users/:email",singleUser);
router.post("/login", login);

module.exports = router;
