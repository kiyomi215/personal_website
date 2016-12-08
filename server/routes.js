"use strict";

module.exports = function (app) {
  var handler = require('handlers.js');
  app.post('/contact-form', handler.sendEmail);

}
