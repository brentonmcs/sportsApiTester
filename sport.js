//test Sport object

(function () {
    "use strict";

    var _ = require('lodash');
    var util = require('./utility');
    var basicObject = require('./basicObjectTest');
    
    var validate  = function (sportJson, callChildLink) {

      _.forEach(sportJson, function (item) {

          var childLink = basicObject.Validate(item, "Sport");

          if (!childLink) {
            return false;
          }

          if (item.id === 5 || item.id === 6 || item.id === 7) {
            var link = util.convertToUri(childLink.href);
            callChildLink(link);
          }
          return true;

      });
    };

    var testSport = {
        Validate : validate,
        IsSport : function (json) {
          var firstItem = _.first(json);
          return firstItem.links && !firstItem.sport;
        }
    };

    module.exports = testSport;
  })();
