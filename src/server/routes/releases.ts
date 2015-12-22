'use strict';

import * as releaseController from '../controllers/releases';
import * as express from 'express';

export function configureRoute(app: express.Express) {
    app.route('/release').get(releaseController.getReleases);
}
