var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users = [
            {id: 1, name: 'Huy1'},
            {id: 2, name: 'Huy2'}
];

app.get('/', function(req, res) {
    // Dien vao file tinh ke tu dương dan views
    // tham so thu 1: path, tham so thu 2: 1 object
    res.render('index', {  
        name: 'AAA'
    }) 
})

app.get('/users', function(req, res) {
    res.render('./users/index', {
        users: users
    });
});

app.get('/users/search', function(req, res){
    console.log(req.query);
    var q = req.query.q;
    var matchedUsers = users.filter(function(user){
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
    users.push(req.body);
    res.redirect('/users');
})

app.listen(port, function(){
    console.log('Server listening on port '+ port);
});