const publicRoute = require('express').Router();
const { loginPage, signupPage, profile } = require('../controllers/views');

publicRoute.get('/login', loginPage);
publicRoute.get('/signup', signupPage);
publicRoute.get('/profile', profile);

module.exports = publicRoute;
