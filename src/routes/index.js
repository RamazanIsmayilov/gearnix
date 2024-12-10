const { Router } = require("express");
const authRouter = require("./auth.router");
const uploadRouter = require("./upload.router");
const categoryRouter = require("./category.router");

const router = Router();

router.use("/auth", authRouter);
router.use("/upload", uploadRouter);
router.use("/category", categoryRouter);

module.exports = router;
