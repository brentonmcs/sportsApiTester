(function () {
  'use strict';
  var _ = require('lodash');
  var winston = require('winston');
  var basicObject = require('./basicObjectTest');

  var logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        json: true
      })
    ],
    exitOnError: false
  });

  module.exports = logger;

})();
