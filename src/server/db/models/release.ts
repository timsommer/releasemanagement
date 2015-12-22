'use strict';

import * as dbCommon from '../common';

export interface Release {
    _id: string;
    title: string;
    description: string;
}


export class ReleaseRepository extends dbCommon.BaseRepository {
    constructor(){
        super('release');
    }

    readAll (callback: (releases: Release[]) => void) {                
        super.getConnection().db.collection(super.getTableName(), function(error, releases_collection) {
            if (error) {
                console.error(error);
                return;
            }

            releases_collection.find({}, { '_id': 1 }).toArray(function(error, releaseObjs) {
                if (error) {
                    console.error(error);
                    return;
                }
                callback(releaseObjs);
            });
        });
    }
}