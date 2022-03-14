const publicRoute = require('express').Router();
const addPostHandler = require('../controllers/posts');
const { loginPage, signupPage, profile } = require('../controllers/views');

publicRoute.get('/login', loginPage);
publicRoute.get('/signup', signupPage);
publicRoute.get('/profile', profile);
publicRoute.post('/addPost', addPostHandler);

module.exports = publicRoute;
