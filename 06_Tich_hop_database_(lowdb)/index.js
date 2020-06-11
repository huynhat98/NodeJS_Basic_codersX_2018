var express = require('express');
var app = express();

var low = require('lowdb');
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("db.json");
var db = low(adapter);
// Set some defaults (required if your JSON file is empty)
db.defaults({users: []})
  .write()

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.get('/', function(req, res) {
    // Dien vao file tinh ke tu dương dan views
    // tham so thu 1: path, tham so thu 2: 1 object
    res.render('index', {  
        name: 'AAA'
    }) 
})

app.get('/users', function(req, res) {
    res.render('./users/index', {
        // get voi key cua lowdb
        users: db.get('users').value()
    });
});

app.get('/users/search', function(req, res){
    console.log(req.query);
    console.log(db.get("users").value());
    
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    });

    res.render('users/index', {
        users: matchedUsers
    });
})

app.get('/users/create', function (req, res) {
    res.render('users/create');
})

app.post('/users/create', function (req, res) {
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.redirect('/users');
})

app.listen(port, function(){
    console.log('Server listening on port '+ port);
});