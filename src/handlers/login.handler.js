
const boom = require('@hapi/boom');

const authenticator = require('../auth/authenticator');

const login = async (req, h) => {
    try {
        const { email, password } = req.payload;
        const token = await authenticator.authenticate(email, password);
        return h.response({'token': token.token}).code(201);
    }
    catch (error) {
        throw boom.notFound(error);
    }
}

const logout = async (req, h) => {
    try {
    }
    catch (e) { }
}

module.exports = {
    login,
    logout
}