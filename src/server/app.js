'use strict';

/**
 * Module dependencies.
 */
var config = require('./config/configuration');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var app = require('./bootstrap')();

// Start the app by listening on <port>, optional hostname
app.listen(config.port, config.hostname);
console.log('Mean app started on port ' + config.port);


// Expose js
exports = module.exports = app;