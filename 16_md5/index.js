var express = require('express');
var app = express();

var userRoute = require('./routes/user.route');

var authRoute = require('./routes/auth.route');

var cookieParser = require("cookie-parser");

var authMiddleware = require('./middlewares/auth.middleware');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

// static files
app.use(express.static('public'));

app.get('/', function(req, res) {
    // Dien vao file tinh ke tu dương dan views
    // tham so thu 1: path, tham so thu 2: 1 object
    res.render('index', {  
        name: req.cookies.name,
        userID: req.cookies.userID
    }) 

})

// router đã export ở file user.route.js
app.use('/users',authMiddleware.requireAuth , userRoute);
app.use('/auth', authRoute);


app.listen(port, function(){
    console.log('Server listening on port '+ port);
});