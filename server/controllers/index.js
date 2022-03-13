const { notFound, serverError } = require('./Errors');
const signup = require('./auth/sIgnup');
const login = require('./auth/login');

module.exports = { notFound, serverError, signup, login };
