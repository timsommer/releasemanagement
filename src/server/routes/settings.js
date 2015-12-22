'use strict';
var config = require('../controllers/settings');
function configureRoute(app) {
    app.route('/config').get(config.readClientConfigSettings);
}
exports.configureRoute = configureRoute;
//# sourceMappingURL=settings.js.map