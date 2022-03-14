const publicRoute = require('express').Router();
const { loginPage, signupPage, profile, addPostHandler, upvoteHandler, downvoteHandler, homePostsHandler, deletePostHandler, userPostshandler } = require('../controllers');
const { checkAuth } = require('../middlewares');

publicRoute.get('/login', loginPage);
publicRoute.get('/signup', signupPage);
publicRoute.get('/profile/:username', profile);
publicRoute.post('/posts', checkAuth, addPostHandler);
publicRoute.get('/posts/:postId/upvote', checkAuth, upvoteHandler);
publicRoute.get('/posts/:postId/downvote', checkAuth, downvoteHandler);
publicRoute.get('/homePosts', homePostsHandler);
publicRoute.delete('/posts/:postId', checkAuth, deletePostHandler);
publicRoute.get('/posts/:username', userPostshandler);

module.exports = publicRoute;
