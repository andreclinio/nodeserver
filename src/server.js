const Hapi = require('@hapi/hapi');
const jwtAuth = require('hapi-auth-jwt2');

const jwtStrategy = require('./auth/strategies/jwt');
const routes = require('./routes');
const mongoService = require('./services/mongo.service');

const { PORT } = process.env;
const { HOST } = process.env;

const createServer = async () => {
    mongoService.connect(); 
    const server = Hapi.server({
        port: PORT,
        host: HOST,
    });
    console.log(">> Rotas");
    server.route(routes);

    console.log(">> plugin jwt");
    await server.register(jwtAuth);
    
    // Definindo estratégia de autenticação
    server.auth.strategy(jwtStrategy.name, jwtStrategy.schema, jwtStrategy.options);
    server.auth.default(jwtStrategy.name);
    return server;
};


module.exports = {
    createServer,
};
