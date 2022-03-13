const apiRoute = require('express').Router();
const { signup } = require('../controllers');

apiRoute.post('/api/v1/signup', signup);

module.exports = apiRoute;
