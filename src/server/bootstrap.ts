'use strict';

import * as express from 'express';

var appPath = process.cwd();
 
export function init () : express.Express {
    
    function bootstrapModels() {
        // Bootstrap models
        require('./util/moduleWalker').walk(appPath + '/src/server/db/models', null, function(path) {
            var model = require(path);
            model.initialize();
        });
    }

    bootstrapModels();

    // Express settings
    var app = express();

    require(appPath + '/src/server/config/express')(app);

    return app;
}
