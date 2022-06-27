const express = require("express");
const { login } = require("../controllers/login");

const router = express.Router();

router.route("login").get(login);

module.exports = router;
