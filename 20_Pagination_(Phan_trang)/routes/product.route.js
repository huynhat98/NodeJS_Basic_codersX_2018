var express = require("express");
var router = express.Router();

//MVC model - view - controller
var controller = require("../controller/product.controller");

router.get("/", controller.index);

module.exports = router;