'use strict';

var config = require('../controllers/config');

module.exports = function(app) {
    app.route('/config').get(config.readClientConfigSettings);
};