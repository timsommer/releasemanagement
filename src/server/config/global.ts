'use strict';

//npm packages without ts support 
import * as _ from  'lodash';
import * as common from  './common';

//npm pacakges with ts support
import * as fs from 'fs';


/** Get the configuration for the current environment settings */
export function getGlobalConfig() : common.IConfiguration {
    
    // Load configurations
    // Set the node environment variable if not set before
    process.env.NODE_ENV = ~fs.readdirSync('./src/server/config/env').map(function(file) {
        return file.slice(0, -3);        
    }).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

    // Extend the base configuration in all.js with environment
    // specific configuration    
    return _.extend(
        require('./env/all').getConfiguration(),
        require('./env/' + process.env.NODE_ENV).getConfiguration() || {}
    ) as common.IConfiguration;
}
