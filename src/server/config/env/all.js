'use strict';
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');
function getConfiguration() {
    return {
        root: rootPath,
        port: process.env.PORT || 3000,
        hostname: process.env.HOST || process.env.HOSTNAME
    };
}
exports.getConfiguration = getConfiguration;
;
//# sourceMappingURL=all.js.map