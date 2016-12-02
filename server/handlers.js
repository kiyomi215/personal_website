'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


exports.sendEmail = function(req, res) {
  var email = req.body;

  transporter.sendMail({
    from: email.contact.email,
    to: 'keeleynakamoto@gmail.com',
    subject: 'Message from ' + email.contact.name,
    text: email.contact.number + ' ' + email.contact.message
  });
  res.json(email);
}
