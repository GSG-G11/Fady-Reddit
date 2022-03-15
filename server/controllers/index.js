const { notFound, serverError } = require('./Errors');
const signup = require('./auth/sIgnup');
const login = require('./auth/login');
const { upvoteHandler, downvoteHandler, addPostHandler, homePostsHandler, deletePostHandler, userPostshandler } = require('./posts');
const { loginPage, signupPage, profile } = require('./views');
const { addCommentHandler, getCommentsHandler, deleteCommentHandler } = require('./comments');
const logout = require('./auth/logout');

module.exports = {
  notFound,
  serverError,
  signup,
  login,
  upvoteHandler,
  downvoteHandler,
  addPostHandler,
  loginPage,
  signupPage,
  profile,
  homePostsHandler,
  deletePostHandler,
  userPostshandler,
  addCommentHandler,
  getCommentsHandler,
  deleteCommentHandler,
  logout,
};
