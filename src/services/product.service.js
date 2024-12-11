const Product = require("../models/Product.model");
const { NotFoundError } = require("../utils/error.utils");
const generateSlug = require("../utils/slug.utils");

const addProduct = async (params) => {
  if (!params.slug) {
    params.slug = generateSlug(params.title);
  }
  const newProduct = new Product(params);
  await newProduct.save();
  return newProduct;
};

const allProducts = async (filter = {}) => {
  const query = Product.find();
  if (filter.categories) {
    query.in("categories", filter.categories);
  }

  if (filter.minPrice) {
    query.gte("price", filter.minPrice);
  }

  if (filter.maxPrice) {
    query.lte("price", filter.maxPrice);
  }

  let result = await query;
  return result;
};

const singleProduct = async (id) => {
  const singleProduct = await Product.findById(id);
  if (!singleProduct) throw new NotFoundError("Product is not found");
  return singleProduct;
};

const updateProduct = async (id, params) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, params, {
    new: true,
  });
  if (!updatedProduct) throw new NotFoundError("Product is not found");
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) throw new NotFoundError("Product is not found");
  return deletedProduct;
};

const productService = {
  addProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};

module.exports = productService;
