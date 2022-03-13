const apiRoute = require('express').Router();
const { signup, login } = require('../controllers');

apiRoute.post('/api/v1/signup', signup);
apiRoute.post('/api/v1/login', login);
module.exports = apiRoute;
