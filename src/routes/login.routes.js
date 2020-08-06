

const handlers = require("../handlers");
const schemas = require("../schemas");

const loginHandler = handlers.loginHandler;
const loginSchema = schemas.loginSchema;

module.exports = [
    {
        method: 'POST', 
        path: '/login', 
        handler: loginHandler.login, 
        options: {
            validate: {
                payload: loginSchema
            },
            auth: false,
        }
    }
]