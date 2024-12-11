const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const brandController = require("../controllers/brand.controller");
const validationMiddleware = require("../middlewares/validation.middleware");
const brandValidation = require("../validations/brand.validation");

const brandRouter = Router();

brandRouter.get("/", brandController.allBrands);
brandRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(brandValidation.create),
  brandController.addBrand
);
brandRouter.post(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(brandValidation.update),
  brandController.updateBrand
);
brandRouter.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  brandController.deleteBrand
);

module.exports = brandRouter;
