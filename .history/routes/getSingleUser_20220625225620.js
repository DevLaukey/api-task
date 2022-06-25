const express = require("express");
const { singleUser } = require("../controllers/singleUser");

const router = express.Router();

// router.route("/").get(authorize,getUser); or

router.route("/users/:id").get(singleUser);

module.exports = router;
