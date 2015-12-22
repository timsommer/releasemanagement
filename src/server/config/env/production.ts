'use strict';

import * as config from '../common';

export function getConfiguration(): config.IConfiguration {
    return {
        db: {
           name: 'releasemanagement_main',
    	   server: 'localhost',
    	   port: 27017,
    	   auto_reconnect: true,
    	   safeMode: true
        },
        app: {
            name: 'Release Management'
        },  
        client: {
    	   dataRoot: '/'
        }
    } as config.IConfiguration;   
};