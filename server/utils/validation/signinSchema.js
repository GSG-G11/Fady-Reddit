const joi = require('joi');

const signinSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().required(),
});

module.exports = signinSchema;
