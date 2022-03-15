const dbconnection = require('../../config/connection');

const addPost = (title, content, userId, img) =>
  dbconnection.query({
    text: 'INSERT INTO posts (title, content , user_id,img_post) VALUES ($1,$2,$3,$4) Returning id',
    values: [title, content, userId, img],
  });
module.exports = addPost;
