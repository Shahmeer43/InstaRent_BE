const Joi = require("joi");

const signupSchema = Joi.object({
  roleId: Joi.number().required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
}).required();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).required();

module.exports = {
  loginSchema,
  signupSchema,
};
