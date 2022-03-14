const dbconnection = require('../../config/connection');

const getUserByname = (username) =>
  dbconnection.query('SELECT * FROM users WHERE username = $1', [username]);

module.exports = getUserByname;
