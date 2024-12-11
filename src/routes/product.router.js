const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const productController = require("../controllers/product.controller");
const validationMiddleware = require("../middlewares/validation.middleware");
const productValidation = require("../validations/product.validation");

const productRouter = Router();

productRouter.get(
  "/",
  validationMiddleware(productValidation.list, "query"),
  productController.allProducts
);
productRouter.get(
  "/:id",
  validationMiddleware(productValidation.list),
  productController.singleProduct
);
productRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(productValidation.create),
  productController.addProduct
);
productRouter.post(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(productValidation.update),
  productController.updateProduct
);
productRouter.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  productController.deleteProduct
);

module.exports = productRouter;
