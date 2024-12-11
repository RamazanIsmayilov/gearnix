const Joi = require("joi");

const create = Joi.object({
  name: Joi.string().trim().required(),
  slug: Joi.string().trim().optional(),
  order: Joi.number().integer().min(0).default(0),
});

const update = Joi.object({
  name: Joi.string().trim().optional(),
  slug: Joi.string().trim().optional(),
  order: Joi.number().integer().min(0).optional(),
});

const brandValidation = {
  create,
  update,
};

module.exports = brandValidation;
