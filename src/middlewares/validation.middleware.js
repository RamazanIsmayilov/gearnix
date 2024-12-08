const { ValidationError } = require("../utils/error.utils");

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return next(new ValidationError(error?.details?.[0].message));

    next()
  };
};

module.exports = validationMiddleware