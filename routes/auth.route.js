var express = require("express");
// var validate = require("../validate/user.validate");

var controller = require("../controllers/auth.controller");

var router = express.Router();

router.get("/login", controller.login);

module.exports = router;
