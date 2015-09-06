(function () {
  'use strict';

  var _ = require('lodash');
  var util = require('./utility');
  var basicObject = require('./basicObjectTest');
  var logger = require('./logger');


    var validate = function (json, uri, parentItem, callBack) {

    function isSoccer(argument) {
      return uri.indexOf('/7/') > -1;
    }

    function isChildCompList(childLink) {
      if (childLink.href.toLowerCase().indexOf('/event') > -1) {
        console.log('Soccer Comp should be Competition of Comp');
        return false;
      }
      return true;
    }

    if (json.length === 0) {
      logger.error('Missing competitions');
      return false;
    }

    _.forEach(json, function (item) {

      var childLink = basicObject.Validate(item, "competition");

      if (parentItem) {
        logger.info('parent item', parentItem);
      }
      if (!item.sport) {
        logger.error('Missing Sport Property', uri);
        return false;
      }

      if (!childLink) {
        return false;
      }

      if (isSoccer()) {
        if (!isChildCompList(childLink)) {
          return false;
        }
      }
      callBack(util.convertToUri(childLink.href), item);

    });
  };

  module.exports = {
    isType: function (json) {
      var firstItem = _.first(json);
      return firstItem.sport;
    },
    validate: validate
  };
})();
