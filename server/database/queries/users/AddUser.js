const dbconnection = require('../../config/connection');

const addUser = (username, email, hash) =>
  dbconnection.query({
    text: 'INSERT INTO users (username, email , password) VALUES ($1,$2,$3)',
    values: [username, email, hash],
  });
module.exports = addUser;
