var express = require("express");
var router = express.Router();

//MVC model - view - controller
var controller = require("../controller/cart.controller");

router.get("/add/:productID", controller.addToCart);

module.exports = router;
