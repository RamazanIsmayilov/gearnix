const express = require("express");
const cors = require("cors");
const path = require("path");
const dbConnect = require("./src/config/databaze");
const config = require("./src/config");
const errorMiddleware = require("./src/middlewares/error.middleware");
const router = require("./src/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/api", router)

dbConnect();

app.use(errorMiddleware)

app.listen(config.port, () => {
  console.log(`Application is running on http://localhost:${config.port}`);
});
