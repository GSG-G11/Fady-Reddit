const dbconnection = require('../../config/connection');

const upvote = (id) => dbconnection.query('UPDATE posts SET vote = vote + 1 WHERE id = $1', [id]);
const downvote = (id) => dbconnection.query('UPDATE posts SET vote = vote - 1 WHERE id = $1', [id]);

module.exports = { upvote, downvote };
