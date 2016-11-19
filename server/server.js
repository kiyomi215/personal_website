var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.eng.PORT || 8080;

app.use(express.static(__dirname + '/client'));
