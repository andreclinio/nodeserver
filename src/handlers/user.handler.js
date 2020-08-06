
const boom = require('@hapi/boom');

const userRepository = require('../repositories/user.repository');
const hash = require('../utils/hash');

const create = async (req, h) => {
    try {
        const userData = req.payload
        const hashedPassword = await hash.make(userData.password);
        userData.password = hashedPassword;
        const user = await userRepository.create(userData);
        return h.response(user).code(201);
    }
    catch (error) {
        throw boom.badData(error);
    }
}

const list = async (req, h) => {
    try {
        const users = await userRepository.list();
        return h.response(users).code(200);
    }
    catch (error) {
        throw boom.badData(error);
    }

}

module.exports = {
    create,
    list
}