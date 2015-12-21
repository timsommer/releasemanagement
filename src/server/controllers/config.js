'use strict';

var config = require('../config/configuration');

exports.readClientConfigSettings = function(req, res) {
    console.log('pushing client config ' + config.client);
	res.send(config.client);
};