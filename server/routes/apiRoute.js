const apiRoute = require('express').Router();
const { signup, login, logout, userData } = require('../controllers');

apiRoute.post('/api/v1/signup', signup);
apiRoute.post('/api/v1/login', login);
apiRoute.delete('/api/v1/logout', logout);
apiRoute.get('/api/v1/userData', userData);

module.exports = apiRoute;
