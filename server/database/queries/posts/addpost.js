const dbconnection = require('../../config/connection');

const addPost = (title, content, userId) =>
  dbconnection.query({
    text: 'INSERT INTO posts (title, post_text , user_id) VALUES ($1,$2,$3) Returning id',
    values: [title, content, userId],
  });
module.exports = addPost;
