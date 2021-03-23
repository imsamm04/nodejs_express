var express = require("express");

var controller = require("../controllers/user.controller");

var router = express.Router();

router.get("/", controller.index);

router.get("/cookie", function (req, res, next) {
  res.cookie("user-id, 123456");
  res.send("Hello");
});

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create", controller.postCreate);

module.exports = router;
