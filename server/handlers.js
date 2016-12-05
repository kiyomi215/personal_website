'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


exports.sendEmail = function(req, res) {
  var email = req.body;
  if(email.sendCopy) {
    var recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>', email.contact.name + ' <'email.contact.email'>';
  } else {
    var recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>';
  }

  transporter.sendMail({
    from: email.contact.email,
    to: recipient,
    subject: 'Message from ' + email.contact.name,
    text: email.contact.number + ' ' + email.contact.message
  }, function(err, info) {
    if(err) {
      console.log(err);
    } else {
      console.log('Message sent: ', info.response);
    }
  });
  res.json(email);
}
