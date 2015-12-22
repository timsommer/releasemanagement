'use strict';

import * as mongoDb from 'mongodb';
import * as configuration from '../config/global';

var dbConfig = configuration.getGlobalConfig().db;

export class Connection {
    db: mongoDb.Db;

    constructor() {
        this.db = new mongoDb.Db(dbConfig.name, new mongoDb.Server(dbConfig.server, dbConfig.port, { auto_reconnect: dbConfig.auto_reconnect })); 
        
        this.db.open(function(err, db) {
            if (!err) {
                console.log('Connected to \'' + dbConfig.name + '\' database');
            } else {
                console.log('Failed to open database..');
                throw err;
            }
        });
    }
};
