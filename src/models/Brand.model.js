const { Schema, model } = require("mongoose");

const brandSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Brand = model("Brand", brandSchema);

module.exports = Brand;
