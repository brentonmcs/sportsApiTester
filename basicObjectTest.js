(function () {
  "use strict";

  var _ = require('lodash');
  var logger = require('./logger');

  module.exports = {
    Validate: function (item, objectName) {

      if (!item.name || item.name.length === 0) {
        logger.error(item, 'Testing ' + objectName + ' - Missing Name');
        return undefined;
      }
      if (!item.id || item.id === 0) {
        logger.error(item, 'Testing ' + objectName + ' - Missing Id');
        return undefined;
      }

      if (!item.links) {
        logger.error(item, 'Testing ' + objectName + ' - Missing Links');
        return undefined;
      }

      var childLink = _.find(item.links, 'rel', 'children');

      if (!childLink) {
        logger.error(item, 'Testing ' + objectName + ' - Missing Links (children)');
        return undefined;
      }
      return childLink;

    }
  };
})();
