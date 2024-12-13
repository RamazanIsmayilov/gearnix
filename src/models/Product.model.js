const { Schema, model } = require("mongoose");

const productSpecSchema = new Schema({
  key: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  values: [
    {
      key: {
        type: String,
        trim: true,
        required: true,
      },
      value: {
        type: String,
        trim: true,
        required: true,
      },
    },
  ],
});

const productVariantSchema = new Schema({
  specs: {
    type: Map,
    of: String,
    default: {},
  },
  images: {
    type: [Schema.Types.ObjectId],
    ref: "Image",
    default: [],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    default: 0,
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
  slug: {
    type: String,
    trim: true,
    unique: true,
  },
});

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
    specs: [productSpecSchema],
    variants: [productVariantSchema],
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
