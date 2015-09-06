(function () {
  'use strict';
  var _ = require('lodash');
  var logger = require('./logger');
  var basicObject = require('./basicObjectTest');

  module.exports = {
    isType: function (json) {
      return _.first(json).competition;
    },
    validate: function (json, uri, parentItem, callBack) {

      function checkMarket(id) {

      }

      if (json.length === 0) {
        logger.error('Missing events');
        return false;
      }

      _.forEach(json, function (item) {

        logger.info('checking event', item.id);

        var childLink = basicObject.Validate(item, "event");

        if (!item.featuredmarket) {
          checkMarket(item.id);
        }
      });
    }
  };
})();
