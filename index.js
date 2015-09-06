
var util = require('./utility');

var requestor = require('./requestor');

requestor.makeRequest(util.convertToUri(''), {});
requestor.makeRequest(util.convertToUri('/api/sport/live/event'), {});
