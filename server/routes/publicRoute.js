const publicRoute = require('express').Router();
const { loginPage, signupPage, profile, addPostHandler, upvoteHandler, downvoteHandler, homePostsHandler, deletePostHandler } = require('../controllers');
const { checkAuth } = require('../middlewares');

publicRoute.get('/login', loginPage);
publicRoute.get('/signup', signupPage);
publicRoute.get('/profile', profile);
publicRoute.post('/posts', checkAuth, addPostHandler);
publicRoute.get('/upvote/:postId', checkAuth, upvoteHandler);
publicRoute.get('/downvote/:postId', checkAuth, downvoteHandler);
publicRoute.get('/homePosts', homePostsHandler);
publicRoute.delete('/posts/:postId', checkAuth, deletePostHandler);

module.exports = publicRoute;
