(function () {
  'use strict';
  var testSport = require('./sport');
  var testComp = require('./competition');
  var testEvent = require('./event');
  var _ = require('lodash');
  var request = require('request');

  var testChild = function (childLink) {
    if (childLink && childLink.length > 0) {
      makeRequest(childLink);
    }
  };

  function determineType(json, uri, parentItem) {

    if (json.event) {

    }
    var firstItem = _.first(json);
    if (testEvent.isType(json)) {
      testEvent.validate(json, uri, parentItem, testChild);
      return;
    }

    if (testComp.isType(json)) {
      testComp.validate(json, uri, parentItem, testChild);
      return;
    }

    if (testSport.IsSport(json)) {
      testSport.Validate(json, testChild);
    }
  }

  var makeRequest = function (uri, parentItem) {

    function callBack(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        determineType(info, uri, parentItem);
      } else {
        console.log(error);
      }
    }
    var options = {
      url: uri,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'apiKey': '9bfdeb47a7ca4cb2aeb1affdd2732f03',
        'secret': 'c26116b49bc34dbd88753D0CE1482E47',
      }
    };

    request(options, callBack);
  };
  module.exports = {
    makeRequest: makeRequest
  };

})();
