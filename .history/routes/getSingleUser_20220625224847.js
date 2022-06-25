const express = require("express");
const { singleUser } = require("../controllers/allUsers");

const router = express.Router();

// router.route("/").get(authorize,getUser); or

router.route("/").get(singleUser);

module.exports = router;
