const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const brandController = require("../controllers/brand.controller");

const brandRouter = Router();

brandRouter.get("/", brandController.allBrands);
brandRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  brandController.addBrand
);
brandRouter.post(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  brandController.updateBrand
);
brandRouter.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  brandController.deleteBrand
);

module.exports = brandRouter;
