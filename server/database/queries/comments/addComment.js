const dbconnection = require('../../config/connection');

const addComment = (content, postId, userId) =>
  dbconnection.query({
    text: 'INSERT INTO comments (content, post_id , user_id) VALUES ($1,$2,$3)',
    values: [content, postId, userId],
  });
module.exports = addComment;
