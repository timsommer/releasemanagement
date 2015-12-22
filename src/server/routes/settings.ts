'use strict';

import * as config from '../controllers/settings';
import * as express from 'express';

export function configureRoute(app: express.Express) {
    app.route('/config').get(config.readClientConfigSettings);
}
