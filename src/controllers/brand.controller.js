const brandService = require("../services/brand.service");

const allBrands = async (req, res, next) => {
  try {
    const brands = await brandService.allBrands();
    res.json(brands);
  } catch (error) {
    next(error);
  }
};

const addBrand = async (req, res, next) => {
  try {
    const newBrand = await brandService.addBrand(req.body);
    res.json(newBrand);
  } catch (error) {
    next(error);
  }
};

const updateBrand = async (req, res, next) => {
  try {
    const updatedBrand = await brandService.updateBrand(
      req.params.id,
      req.body
    );
    res.json(updatedBrand);
  } catch (error) {
    next(error);
  }
};

const deleteBrand = async (req, res, next) => {
  try {
    const deletedBrand = await brandService.deleteBrand(req.params.id);
    res.json(deletedBrand);
  } catch (error) {
    next(error);
  }
};

const brandController = {
  allBrands,
  addBrand,
  updateBrand,
  deleteBrand,
};

module.exports = brandController;
