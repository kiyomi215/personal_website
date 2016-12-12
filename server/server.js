var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client'));

app.listen(port);
console.log('Listening at port: ' + port);

var handler = require('./handlers.js');
app.post('/contact-form', handler.sendEmail);
