const dbconnection = require('../../config/connection');

const getUser = (email) =>
  dbconnection.query('SELECT * FROM users WHERE email = $1', [email]);

module.exports = getUser;
