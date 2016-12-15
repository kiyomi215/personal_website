'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


exports.sendEmail = function(req, res) {
  var email = req.body;
  var recipient;
  if(email.sendCopy) {
    recipient = {
      name: 'Keeley Nakamoto',
      address: 'keeleynakamoto@gmail.com'
    }
  } else {
    recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>';
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

  res.json('Here it is       ', email);
}
