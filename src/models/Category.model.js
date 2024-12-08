const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    ref: "Image",
  },
});

const Category = model("Category", categorySchema)

module.exports = Category