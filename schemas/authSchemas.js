const Joi = require("joi");

const signUpSchema = Joi.object({
  roleId: Joi.number().required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
}).required();

const logInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).required();

module.exports = {
  logInSchema,
  signUpSchema,
};
