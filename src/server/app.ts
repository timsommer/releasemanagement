///<reference path="./config/configuration.ts" />

'use strict';

/**
 * Module dependencies.
 */
import configuration = require('./config/configuration');


/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var app = require('./bootstrap')();


var environmentConfig = configuration.getCurrentEnvironmentConfiguration();

// Start the app by listening on <port>, optional hostname
app.listen(environmentConfig.port, environmentConfig.hostname);
console.log('ReleaseManagement app started on port ' + environmentConfig.port + ' (' + process.env.NODE_ENV + ')');