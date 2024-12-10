const { Router } = require("express");
const upload = require("../middlewares/upload.middleware");
const uploadController = require("../controllers/upload.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const uploadRouter = Router();

uploadRouter.post(
  "/image",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  uploadController.uploadImage
);

module.exports = uploadRouter;
