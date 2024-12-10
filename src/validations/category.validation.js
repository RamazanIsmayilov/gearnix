const Joi = require("joi");

const create = Joi.object({
  name: Joi.string().trim().required(),
  slug: Joi.string().trim().required(),
  order: Joi.number().integer().min(0).default(0),
  image: Joi.string().optional(),
  parentId: Joi.string().optional().allow(null),
});

const update = Joi.object({
  name: Joi.string().trim().optional(),
  slug: Joi.string().trim().optional(),
  order: Joi.number().integer().min(0).optional(),
  image: Joi.string().optional(),
  parentId: Joi.string().optional().allow(null),
});

const categoryValidation = {
  create,
  update,
};

module.exports = categoryValidation;
