

const handlers = require("../handlers");
const pingHandler = handlers.pingHandler;


module.exports = [
    {
        method: 'GET', 
        path: '/ping', 
        handler: (req, h) => {
            console.log("PING!");
            return h.response({"ping": true}).code(200);
        },
        options: {}
    }
]