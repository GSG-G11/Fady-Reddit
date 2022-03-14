const publicRoute = require('express').Router();
const { loginPage, signupPage, profile, addPostHandler, upvoteHandler, downvoteHandler } = require('../controllers');

publicRoute.get('/login', loginPage);
publicRoute.get('/signup', signupPage);
publicRoute.get('/profile', profile);
publicRoute.post('/addPost', addPostHandler);
publicRoute.get('/upvote/:postId', upvoteHandler);
publicRoute.get('/downvote/:postId', downvoteHandler);

module.exports = publicRoute;
