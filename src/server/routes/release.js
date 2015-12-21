'use strict';

var entries = require('../controllers/release');

module.exports = function(app) {
   app.route('/release').get(entries.entries);
//    app.route('/blogEntries/:id*').get(entries.readById);
};