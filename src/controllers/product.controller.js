const productService = require("../services/product.service");

const addProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.addProduct(req.body);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

const allProducts = async (req, res, next) => {
  try {
    let result = await productService.allProducts(req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const singleProduct = async (req, res, next) => {
  try {
    const singleProduct = await productService.singleProduct(req.params.id);
    res.json(singleProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await productService.updateProduct(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
};

const productController = {
  addProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};

module.exports = productController;
