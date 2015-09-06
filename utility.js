(function () {

  'use strict';

  var baseUri = 'https://api.williamhill.com.au/mobile/sport/v1/sport/';

  module.exports = {
    convertToUri: function (href) {
      return baseUri + href.toLowerCase().replace('/api/sport/', '').toLowerCase();
    }
  };

})();
