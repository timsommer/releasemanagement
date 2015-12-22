'use strict';
var express = require('express');
var expressConfig = require('./config/express');
var appPath = process.cwd();
function init() {
    function bootstrapModels() {
        // Bootstrap models
        require('./util/moduleWalker').walk(appPath + '/src/server/db/models', null, function (path) {
            var model = require(path);
            model.initialize();
        });
    }
    bootstrapModels();
    // Express settings
    var app = express();
    expressConfig.config(app);
    return app;
}
exports.init = init;
//# sourceMappingURL=bootstrap.js.map