const apiRoute = require('express').Router();
const { signup, login, logout, userData, profileData } = require('../controllers');

apiRoute.post('/api/v1/signup', signup);
apiRoute.post('/api/v1/login', login);
apiRoute.get('/api/v1/logout', logout);
apiRoute.get('/api/v1/userData', userData);
apiRoute.get('/api/v1/profile/:username', profileData);
module.exports = apiRoute;
