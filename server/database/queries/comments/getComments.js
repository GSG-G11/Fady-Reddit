const dbconnection = require('../../config/connection');

const getComments = (postId) =>
  dbconnection.query({
    text: 'SELECT comments.id, comments.content, users.username, users.img FROM users INNER JOIN comments ON users.id = comments.user_id INNER JOIN posts ON comments.post_id = posts.id WHERE posts.id = $1',
    values: [postId],
  });
module.exports = getComments;
