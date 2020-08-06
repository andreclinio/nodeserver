const handlers = require("../handlers");
const userHandler = handlers.userHandler;
const userSchema = require("../schemas/user.schema");


module.exports = [
    {
        method: 'POST', 
        path: '/users', 
        handler: userHandler.create,
        options: {
            validate: {
                payload: userSchema
            },
            auth: false,
        }
    },

    {
        method: 'GET', 
        path: '/users', 
        handler: userHandler.list
    }

]