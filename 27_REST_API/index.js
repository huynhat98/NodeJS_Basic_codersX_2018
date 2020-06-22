require('dotenv').config();
console.log(process.env.SESSION_SECRET);

var express = require('express');
var app = express();

var csurf = require('csurf');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.route');

var authRoute = require('./routes/auth.route');

var productRoute = require('./routes/product.route');

var cookieParser = require("cookie-parser");

var authMiddleware = require('./middlewares/auth.middleware');

var sessionMiddleware = require('./middlewares/session.middleware');

var cartRoute = require('./routes/cart.route');

var transferRoute = require('./routes/transfer.route');

var apiProductRoute = require('./api/routes/product.route');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/api/products", apiProductRoute);

app.use(cookieParser(process.env.SESSION_SECRET));

// static files
app.use(express.static('public'));

// use tren tat ca cac duong dan
app.use(sessionMiddleware);

// app.use(csurf({cookie: true}));


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
app.use('/products', productRoute);
app.use('/cart',cartRoute);
app.use("/transfer", authMiddleware.requireAuth, transferRoute);


app.listen(port, function(){
    console.log('Server listening on port '+ port);
});