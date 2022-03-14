const dbconnection = require('../../config/connection');

const deleteComment = (postId, userId) => dbconnection.query('DELETE FROM comments WHERE id=$1 AND user_id=$2', [postId, userId]);

module.exports = deleteComment;
