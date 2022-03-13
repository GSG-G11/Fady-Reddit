const { sign } = require('jsonwebtoken');

const jwtAsync = (payLoad) =>
  new Promise((resolve, reject) => {
    sign(payLoad, process.env.PRIVATE_KEY, (err, token) => {
      if (err) {
        return reject(err);
      }

      return resolve(token);
    });
  });

module.exports = jwtAsync;
