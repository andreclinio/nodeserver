
const pingRoutes = require('./ping.routes');
const userRoutes = require('./user.routes');
const loginRoutes = require('./login.routes');

module.exports = [
    ...userRoutes,
    ...pingRoutes,
    ...loginRoutes,
];