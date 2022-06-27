const express = require("express");
const { login } = require("../controllers/login");

const router = express.Router();

router.route("/login")
router.post(login);

module.exports = router;
