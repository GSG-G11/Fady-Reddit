const addPost = require('./posts/addpost');
const deletePost = require('./posts/deletePost');
const userPosts = require('./posts/getUserPosts');
const homePosts = require('./posts/homePosts');
const { upvote, downvote } = require('./posts/votes');
const addUser = require('./users/AddUser');
const getUser = require('./users/getUser');
const getUserByname = require('./users/getUserByname');

module.exports = {
  addUser,
  getUser,
  addPost,
  upvote,
  downvote,
  homePosts,
  deletePost,
  getUserByname,
  userPosts,
};
