const { ALGORITHM } = require('../config');

const name = 'jwt';
const schema = 'jwt';

const options = {
  key: process.env.API_SECRET_KEY,
  validate: (decoded, h) => {
    return { isValid: true };
  },
  verifyOptions: { algorithms: [ALGORITHM] },
};

module.exports = {
  name,
  schema,
  options,
};