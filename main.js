var mark = 626564324234;

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Sebas is gay net als zijn moeder');
});

app.listen(4200, function() {
    console.log('hot and ready to go');
});