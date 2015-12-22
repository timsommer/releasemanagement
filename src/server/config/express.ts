'use strict';

import * as express from 'express';
import * as morgan from 'morgan';
import * as errorHandler from 'errorhandler';
import * as compression from'compression';
import * as util from '../util/moduleWalker';

var appPath = process.cwd();

export function config (app: express.Express) {

    // Prettify HTML
    app.locals.pretty = true;

    // cache=memory or swig dies in NODE_ENV=production
    app.locals.cache = 'memory';

    // Should be placed before express.static
    // To ensure that all assets and data are compressed (utilize bandwidth)
        
    /*app.use(compression({
        // Levels are specified in a range of 0 to 9, where-as 0 is
        // no compression and 9 is best compression, but slowest
         level: 9
    }));*/

    // Only use logger for development environment
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    
    //app.use(bodyParser());
    app.use(express.static(appPath + '/src/public'));
    
    // Catch all route regarding entries to work with the html5mode of Angular
    app.use('/entries', function(req, res) {
        res.sendfile(appPath + '/src/public/index.html');
    });

    (function bootstrapRoutes() {
        // Skip the app/routes/middlewares directory as it is meant to be
        // used and shared by routes as further middlewares and is not a
        // route by itself
        util.walk(appPath + '/src/server/routes', 'middlewares', function(path) {
            console.info('configuring route for ' + path);
            require(path).configureRoute(app);
        });
    })();
        
    app.use('/*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        next();
    });


    function errorhandler(err, req, res, next) {
            // Treat as 404
        if (~err.message.indexOf('not found')) return next();

        // Log it
        console.error(err.stack);

        // Error page
        res.status(500).render('500', {
            error: err.stack
        });
    }

    // Assume "not found" in the error msgs is a 404. this is somewhat
    // silly, but valid, you can do whatever you like, set properties,
    // use instanceof etc.
    app.use(errorhandler);
    
    // Assume 404 since no middleware responded
    app.use(function(req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });

    // Error handler - has to be last
    if (process.env.NODE_ENV === 'development') {
        app.use(errorHandler());
    }
};