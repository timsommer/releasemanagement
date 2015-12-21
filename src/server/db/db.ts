'use strict';

import db = require('mongodb');

import configuration = require('../config/configuration');

var dbConfig = configuration.getCurrentEnvironmentConfiguration().db;

var Db = new db.Db(dbConfig.name, new db.Server(dbConfig.server, dbConfig.port, { auto_reconnect: dbConfig.auto_reconnect }));

exports.initialize = function() {
    Db.open(function(err, db) {
        if (!err) {
            console.log('Connected to \'' + dbConfig.name + '\' database');
        } else {
            console.log('Failed to open database..');
            throw err;
        }
    });
};

exports.db = Db;
exports.ObjectID = db.ObjectID;