const addPost = require('./posts/addpost');
const { upvote, downvote } = require('./posts/votes');
const addUser = require('./users/AddUser');
const getUser = require('./users/getUser');

module.exports = { addUser, getUser, addPost, upvote, downvote };
