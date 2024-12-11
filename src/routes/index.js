const { Router } = require("express");
const authRouter = require("./auth.router");
const uploadRouter = require("./upload.router");
const categoryRouter = require("./category.router");
const brandRouter = require("./brand.router");
const productRouter = require("./product.router");

const router = Router();

router.use("/auth", authRouter);
router.use("/upload", uploadRouter);
router.use("/category", categoryRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);

module.exports = router;
