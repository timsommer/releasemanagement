'use strict';

import * as express from 'express';
import * as release from '../db/models/release';

var releaseRepo = new release.ReleaseRepository();

export function getReleases(req: express.Request, res: express.Response) {
    releaseRepo.readAll(function(releases) {
        res.send(releases);
    });
}

/*
exports.readById = function readById(req, res) {
    var _id = req.params.id;
    console.log('readById called with id ' + _id);
    controllerRepo.readById(_id, res);
};*/