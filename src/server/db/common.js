var dbBase = require('./db');
var BaseRepository = (function () {
    function BaseRepository(tableName) {
        this.tableName = tableName;
        this.db = new dbBase.Connection();
        this.db.db.collection(tableName, function (err, collection) {
            if (err) {
                console.warn('The ' + tableName + ' collection doesnt exist..');
            }
            else {
                console.log('Connection to ' + tableName + ' succeeded');
            }
        });
    }
    BaseRepository.prototype.getTableName = function () {
        return this.tableName;
    };
    BaseRepository.prototype.getConnection = function () {
        return this.db;
    };
    return BaseRepository;
})();
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=common.js.map