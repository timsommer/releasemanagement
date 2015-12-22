'use strict';

import * as configuration from '../config/global';
import * as express from 'express';

var config = configuration.getGlobalConfig();

export function readClientConfigSettings(req: express.Request, res: express.Response) {
    console.log('pushing client config ' + config.client);
    res.send(config.client);
}