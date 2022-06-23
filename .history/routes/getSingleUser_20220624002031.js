const express = require("express");
const { singleUser } = require("../controllers/allUsers");

const router = express.Router();

// router.route("/").get(authorize,getUser); or

router.use("/users/:id", singleUser);

module.exports = router;
