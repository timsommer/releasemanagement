'use strict';
function getConfiguration() {
    return {
        db: {
            name: 'releasemanagement_dev',
            server: 'localhost',
            port: 27017,
            auto_reconnect: true,
            safeMode: true
        },
        app: {
            name: 'Release Management'
        },
        client: {
            dataRoot: '/'
        }
    };
}
exports.getConfiguration = getConfiguration;
;
//# sourceMappingURL=development.js.map