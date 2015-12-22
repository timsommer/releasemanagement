'use strict';
var express = require('express');
var expressConfig = require('./config/express');
var appPath = process.cwd();
function init() {
    // Express settings
    var app = express();
    expressConfig.config(app);
    return app;
}
exports.init = init;
//# sourceMappingURL=bootstrap.js.map