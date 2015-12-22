'use strict';

/**
 * Module dependencies.
 */
import configuration = require('./config/global');


/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
import bootstrapper = require('./bootstrap');

var app = bootstrapper.init(),
    environmentConfig = configuration.getGlobalConfig();

// Start the app by listening on <port>, optional hostname
app.listen(environmentConfig.port, environmentConfig.hostname);

console.log('ReleaseManagement app started on port ' + environmentConfig.port + ' (' + process.env.NODE_ENV + ')');
