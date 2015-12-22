'use strict';

import * as path from 'path';
import * as config from '../common';

var rootPath = path.normalize(__dirname + '/../../..');

export function getConfiguration(): config.IConfiguration {
    return { 
        root: rootPath,
        port: process.env.PORT || 3000,
        hostname: process.env.HOST || process.env.HOSTNAME        
    } as config.IConfiguration
};