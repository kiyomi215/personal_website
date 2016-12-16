'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


exports.sendEmail = function(req, res) {
  var email = req.body;
  var recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>';
  // if(email.sendCopy) {
  //   recipient = {
  //     name: 'Keeley Nakamoto',
  //     address: 'keeleynakamoto@gmail.com'
  //   }
  // } else {
  //   recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>';
  // }

  console.log(req.body);
  transporter.sendMail({
    from: email.email,
    to: recipient,
    subject: 'Message from ' + email.name,
    text: email.number + ' ' + email.message
  }, function(err, info) {
    if(err) {
      console.log(err);
    } else {
      console.log('Message sent: ', info.response);
    }
  });

  res.json('Here it is       ', email);
}
