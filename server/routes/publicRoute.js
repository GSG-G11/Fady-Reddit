const publicRoute = require('express').Router();
const { notFound, serverError } = require('../controllers');

publicRoute.use(notFound);
publicRoute.use(serverError);

module.exports = publicRoute;
