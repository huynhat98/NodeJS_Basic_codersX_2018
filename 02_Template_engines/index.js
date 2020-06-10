var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    // Dien vao file tinh ke tu dương dan views
    // tham so thu 1: path, tham so thu 2: 1 object
    res.render('index', {  
        name: 'AAA'
    }) 
})

app.get('/users', function(req, res) {
    res.render('./users/index', {
        users: [
            {id: 1, name: 'Huy1'},
            {id: 2, name: 'Huy2'}
        ]
    });
});

app.listen(port, function(){
    console.log('Server listening on port '+ port);
});