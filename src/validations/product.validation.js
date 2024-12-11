const Joi = require("joi");

const create = Joi.object({
  title: Joi.string().trim().min(5).required(),
  slug: Joi.string()
    .trim()
    .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: Joi.string().trim().min(10).required(),
  order: Joi.number().min(0).default(0),
  price: Joi.number().min(0).required(),
  discount: Joi.number().min(0).default(0),
  discountType: Joi.string().valid("percentage", "value").default("percentage"),
  categories: Joi.array().items(Joi.string()).required(),
  brand: Joi.string().required(),
  stock: Joi.number().min(0).required(),
  rating: Joi.number().min(0).max(5).default(0),
  tags: Joi.array().items(Joi.string()).required(),
  sku: Joi.array().items(Joi.string()).required(),
  images: Joi.array().items(Joi.string()).default([]),
});

const update = Joi.object({
  title: Joi.string().trim().min(3).optional(),
  slug: Joi.string()
    .trim()
    .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .optional(),
  description: Joi.string().trim().min(10).optional(),
  order: Joi.number().min(0).optional(),
  price: Joi.number().min(0).optional(),
  discount: Joi.number().min(0).optional(),
  discountType: Joi.string().valid("percentage", "value").optional(),
  categories: Joi.array().items(Joi.string()).optional(),
  brand: Joi.string().optional(),
  stock: Joi.number().min(0).optional(),
  rating: Joi.number().min(0).max(5).optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  sku: Joi.array().items(Joi.string()).optional(),
  images: Joi.array().items(Joi.string()).optional(),
});

const list = Joi.object({
  categories: Joi.string()
    .custom((value, helpers) => {
      const regex = /^([0-9a-fA-F]{24})(,\s*[0-9a-fA-F]{24})*$/;
      if (!regex.test(value)) {
        return helpers.message("Invalid category IDs");
      }
      return value.split(",").map((id) => id.trim());
    })
    .optional(),
  minPrice: Joi.number().min(0).optional(),
  maxPrice: Joi.number().min(0).optional(),
  limit: Joi.number().min(1).default(10),
  page: Joi.number().min(0).default(0),
});

const productValidation = {
  create,
  update,
  list,
};

module.exports = productValidation;
