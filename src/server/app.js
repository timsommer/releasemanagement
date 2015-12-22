'use strict';
/**
 * Module dependencies.
 */
var configuration = require('./config/global');
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var bootstrapper = require('./bootstrap');
var app = bootstrapper.init(), environmentConfig = configuration.getGlobalConfig();
// Start the app by listening on <port>, optional hostname
app.listen(environmentConfig.port, environmentConfig.hostname);
console.log('ReleaseManagement app started on port ' + environmentConfig.port + ' (' + process.env.NODE_ENV + ')');
//# sourceMappingURL=app.js.map