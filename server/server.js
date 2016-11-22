var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.eng.PORT || 8080;

app.use(express.static(__dirname + '/client'));

app.listen(port);
console.log('Listening at port: ' + port);

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

var mailOptions = {
  from: ''
  to:'',
  subject: '',
  text: '',
  html:''
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('Message sent: ' + data.response);
  }
});
