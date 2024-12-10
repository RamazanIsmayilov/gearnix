const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  slug: {
    type: String,
    trim: true,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
    required: true,
  },
  image: {
    type: String,
    ref: "Image",
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

const Category = model("Category", categorySchema)

module.exports = Category