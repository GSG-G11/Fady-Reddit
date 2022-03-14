const { notFound, serverError } = require('./Errors');
const signup = require('./auth/sIgnup');
const login = require('./auth/login');
const { upvoteHandler, downvoteHandler, addPostHandler } = require('./posts');
const { loginPage, signupPage, profile } = require('./views');

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
};
