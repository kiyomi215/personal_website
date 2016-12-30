var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.listen(port);
console.log('Listening at port: ' + port);

var handler = require('./handlers.js');
app.post('/contact-form', function(req,res) {
  var email = req.body;
  handler.sendEmail(email);
  res.status(200).json(email);
});
