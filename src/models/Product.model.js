const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: Number, 
      default: 0,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    discountType: {
      type: String,
      enum: ["percentage", "value"],
      default: "percentage",
    },
    categories: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
      default: [],
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      default: null,
    },
    stock: {
      type: Number,
      trim: true,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    tags: {
      type: [String],
      trim: true,
      default: [],
    },
    sku: {
      type: [String],
      trim: true,
      required: true,
      unique: true,
    },
    images: {
      type: [Schema.Types.ObjectId],
      ref: "Image",
      default: [],
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
