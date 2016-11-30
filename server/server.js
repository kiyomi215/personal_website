var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.eng.PORT || 8080;

app.use(express.static(__dirname + '/client'));

app.listen(port);
console.log('Listening at port: ' + port);

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

//exports.sendMail = function(req,res) {
  var data = req.body;

  transporter.sendMail({
    from: data.contactEmail,
    to: 'keeleynakamoto@gmail.com',
    subject: 'Message from ' + data.contactName,
    text: data.contactMsg
  });

  res.json(data);
}


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
