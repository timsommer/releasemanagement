'use strict';
var release = require('../db/models/release');
var releaseRepo = new release.ReleaseRepository();
function getReleases(req, res) {
    releaseRepo.readAll(function (releases) {
        res.send(releases);
    });
}
exports.getReleases = getReleases;
/*
exports.readById = function readById(req, res) {
    var _id = req.params.id;
    console.log('readById called with id ' + _id);
    controllerRepo.readById(_id, res);
};*/ 
//# sourceMappingURL=releases.js.map