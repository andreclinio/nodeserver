
const jwt = require('jsonwebtoken');
const { ALGORITHM } = require('./config');

const generate = (data) => (
  new Promise((resolve) => {
    jwt.sign(data, process.env.API_SECRET_KEY, { algorithm: ALGORITHM }, (error, token) => {
      if (error) {
        console.error('Bad token', error);
        throw new Error('Bad token: ' + error.message);
      }
      resolve(token);
    });
  })
);

module.exports = {
  generate,
};