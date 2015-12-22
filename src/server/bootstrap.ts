'use strict';

import * as express from 'express';
import * as expressConfig from './config/express';

var appPath = process.cwd();
 
export function init () : express.Express {
    
    // Express settings
    var app = express();

    expressConfig.config(app);

    return app;
}
