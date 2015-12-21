'use strict';
//npm packages without ts support 
var _ = require('lodash');
//npm pacakges with ts support
var fs = require('fs');
/** Get the configuration for the current environment settings */
function getCurrentEnvironmentConfiguration() {
    // Load configurations
    // Set the node environment variable if not set before
    process.env.NODE_ENV = ~fs.readdirSync('./src/server/config/env').map(function (file) {
        return file.slice(0, -3);
    }).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
    // Extend the base configuration in all.js with environment
    // specific configuration
    return _.extend(require('./env/all'), require('./env/' + process.env.NODE_ENV) || {});
}
exports.getCurrentEnvironmentConfiguration = getCurrentEnvironmentConfiguration;
//# sourceMappingURL=configuration.js.map