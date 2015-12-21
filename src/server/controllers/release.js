'use strict';

var controllerRepo = require ('../db/models/release');

exports.entries = function(req, res) {
    var query = req.query.q;
    console.log('readAll called with par ' + query);
    controllerRepo.readAll(query, res);
};
/*
exports.readById = function readById(req, res) {
    var _id = req.params.id;
    console.log('readById called with id ' + _id);
    controllerRepo.readById(_id, res);
};*/