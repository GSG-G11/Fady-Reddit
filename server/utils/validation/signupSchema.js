const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
  img: joi.string(),
});

module.exports = signupSchema;
