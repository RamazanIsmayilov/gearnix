const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const categoryController = require("../controllers/category.controller");
const roleMiddleware = require("../middlewares/role.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");
const categoryValidation = require("../validations/category.validation");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.allCategories);
categoryRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(categoryValidation.create),
  categoryController.addCategory
);
categoryRouter.post(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(categoryValidation.update),
  categoryController.updateCategory
);
categoryRouter.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  categoryController.deleteCategory
);

module.exports = categoryRouter;
