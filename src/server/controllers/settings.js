'use strict';
var configuration = require('../config/global');
var config = configuration.getGlobalConfig();
function readClientConfigSettings(req, res) {
    console.log('pushing client config ' + config.client);
    res.send(config.client);
}
exports.readClientConfigSettings = readClientConfigSettings;
//# sourceMappingURL=settings.js.map