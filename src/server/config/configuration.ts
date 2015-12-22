'use strict';

//npm packages without ts support 
import _ = require('lodash');

//npm pacakges with ts support
import * as fs from 'fs';

export interface IConfiguration {
    root: string;
    port: number;
    hostname: string
     db: {
    	name: string,
    	server: string,
    	port: number,
    	auto_reconnect: boolean,
    	safeMode: boolean
    },
    app: {
        name: string
    },
    client: {
    	dataRoot: string
    }
}

/** Get the configuration for the current environment settings */
export function getCurrentEnvironmentConfiguration (): IConfiguration {
    
    // Load configurations
    // Set the node environment variable if not set before
    process.env.NODE_ENV = ~fs.readdirSync('./src/server/config/env').map(function(file) {
        return file.slice(0, -3);
        
    }).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

    // Extend the base configuration in all.js with environment
    // specific configuration
    
    return _.extend(
        require('./env/all'),
        require('./env/' + process.env.NODE_ENV) || {}
    ) as IConfiguration;
}
