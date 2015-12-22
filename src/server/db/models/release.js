'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dbCommon = require('../common');
var ReleaseRepository = (function (_super) {
    __extends(ReleaseRepository, _super);
    function ReleaseRepository() {
        _super.call(this, 'release');
    }
    ReleaseRepository.prototype.readAll = function (callback) {
        _super.prototype.getConnection.call(this).db.collection(_super.prototype.getTableName.call(this), function (error, releases_collection) {
            if (error) {
                console.error(error);
                return;
            }
            releases_collection.find({}, { '_id': 1 }).toArray(function (error, releaseObjs) {
                if (error) {
                    console.error(error);
                    return;
                }
                callback(releaseObjs);
            });
        });
    };
    return ReleaseRepository;
})(dbCommon.BaseRepository);
exports.ReleaseRepository = ReleaseRepository;
//# sourceMappingURL=release.js.map