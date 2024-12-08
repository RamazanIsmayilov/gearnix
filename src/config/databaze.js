const { default: mongoose } = require("mongoose");
const config = require(".");

const connectDb = async () => {
  try {
    await mongoose.connect(config.databaseUrl)
    console.log("Database is connected successfully");
  } catch (error) {
    console.error("Database connection failed", error.message);
  }
};

module.exports = connectDb