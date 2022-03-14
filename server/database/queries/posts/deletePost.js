const dbconnection = require('../../config/connection');

const deletePost = (postId, userId) => dbconnection.query('DELETE FROM posts WHERE id=$1 AND user_id=$2', [postId, userId]);

module.exports = deletePost;
