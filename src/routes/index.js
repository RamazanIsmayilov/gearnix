const { Router } = require("express");
const authRouter = require("./auth.router");
const uploadRouter = require("./upload.router");
const categoryRouter = require("./category.router");
const brandRouter = require("./brand.router");

const router = Router();

router.use("/auth", authRouter);
router.use("/upload", uploadRouter);
router.use("/category", categoryRouter);
router.use("/brand", brandRouter);

module.exports = router;
