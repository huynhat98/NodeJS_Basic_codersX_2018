var express = require('express');

var multer = require('multer');

var router = express.Router();


//MVC model - view - controller
var controller = require("../controller/user.controller");

var validate = require("../validate/user.validate");

var authMiddleware = require('../middlewares/auth.middleware');

var upload = multer({dest: './public/uploads'})



router.get("/", authMiddleware.requireAuth,controller.index);

router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('hello');
});

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create",
    // ten avatar phai trung voi name fill cua du lieu trong file pug(HTML)
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate);

module.exports = router;