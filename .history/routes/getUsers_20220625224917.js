const express = require("express");
const { allUsers } = require("../controllers/allUsers");

const router = express.Router();

// router.route("/").get(authorize,getUser); or

router.route("/").get(allUsers);

module.exports = router;
