var express = require("express");
const { render } = require("pug");
var validate = require("../validate/user.validate");

var controller = require("../controllers/user.controller");

var router = express.Router();

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create", validate.postCreate, controller.postCreate);

module.exports = router;
