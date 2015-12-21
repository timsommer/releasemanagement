'use strict';

var connection = require('../db'),
    db = connection.db,
    tableName = 'release',
    ObjectID = connection.ObjectID;


exports.initialize = function() {
    connection.initialize();

    db.collection(tableName, function(err, collection) {
        if (err) {
            console.log('The ' + tableName + ' collection doesnt exist..');
        }
    });
};