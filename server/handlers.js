'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


exports.sendEmail = function(email) {
  //var email = req.body;
  //var recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>';
  // if(email.sendCopy) {
  //   recipient = {
  //     name: 'Keeley Nakamoto',
  //     address: 'keeleynakamoto@gmail.com'
  //   }
  // } else {
  //   recipient = '"Keeley Nakamoto" <keeleynakamoto@gmail.com>';
  // }

  console.log('here is the req.body: ', email);
  transporter.sendMail({
    from: 'keeleynakamoto@gmail.com',
    to: email.email,
    subject: 'Message from ' + email.name,
    text: email.number + ' ' + email.message
  }, function(err, info) {
    if(err) {
      console.log(err);
    } else {
      console.log('Message sent: ', info.response);
    }
  });
}
