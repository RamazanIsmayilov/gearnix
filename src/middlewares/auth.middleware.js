const { UnauthorizedError } = require("../utils/error.utils");
const { decodeToken } = require("../utils/jwt.utils");
const User = require("../models/User.model");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization || "";
  token = token.split(" ")[1];
  if (!token) return next(new UnauthorizedError("Token not provided"));

  let payload = decodeToken(token);
  if (!payload?.userId)
    return next(new UnauthorizedError("Invalid or expired token"));

  let user = await User.findById(payload.userId);
  if (!user) return next(new UnauthorizedError("User not authorized"));

  req.user = user;

  next();
};

module.exports = authMiddleware
