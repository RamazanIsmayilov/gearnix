const Joi = require("joi");

const login = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(3).max(30).required(),
});

const register = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(3).max(30).required(),
  username: Joi.string()
    .trim()
    .min(5)
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/)
    .required(),
});

const authValidation = {
  register,
  login,
};

module.exports = authValidation;
