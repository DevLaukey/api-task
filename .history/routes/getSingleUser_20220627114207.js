const express = require("express");
const { singleUser } = require("../controllers/singleUser");

const router = express.Router();


router.route("/users/:email").get(singleUser);

module.exports = router;
