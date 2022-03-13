const dbconnection = require('../../config/connection');

const addUser = (username, email, hash, img) =>
  dbconnection.query({
    text: 'INSERT INTO users (username, email , password,img) VALUES ($1,$2,$3,$4) Returning id',
    values: [username, email, hash, img],
  });
module.exports = addUser;
