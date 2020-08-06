
const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/user.repository');
const hash = require('../utils/hash');
const tokenizer = require('./tokenizer');
const { LOGIN_EXPIRATION_TIME } = require('./config');


const authenticate = async (email, password) => {
    if (!email || !password) throw new Error("No user or password!");
    
    const user = await userRepository.email2User(email);
    if (!user) throw new Error("No such user!");

    const passwordOk = await hash.compare(password, user.password);
    if (!passwordOk) throw new Error("Bad user or password!")

    const payload = {'userId' : user.id};

  const jwtData = {
    exp: Math.floor(Date.now() / 1000) + LOGIN_EXPIRATION_TIME,
    sub: user.id,
    iss: 'ead-api',
    data: {
      user_id: user.id,
    },
  };

    const token = await tokenizer.generate(jwtData);    
    return {user, token};
}

module.exports = {
    authenticate: authenticate,
}