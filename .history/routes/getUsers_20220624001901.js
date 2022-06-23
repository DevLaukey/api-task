const express = require("express");
const { allUsers } = require("../controllers/allUsers");
const { authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.route("/").get(authorize,getUser); or

router.use("/", allUsers);

module.exports = router;
