'use strict';
var releaseController = require('../controllers/releases');
function configureRoute(app) {
    app.route('/release').get(releaseController.getReleases);
}
exports.configureRoute = configureRoute;
//# sourceMappingURL=releases.js.map