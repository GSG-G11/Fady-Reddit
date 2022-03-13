const joi = require('joi');

const signinSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

module.exports = signinSchema;
