const Brand = require("../models/Brand.model");
const { NotFoundError } = require("../utils/error.utils");

const allBrands = async () => {
  const brands = await Brand.find().sort({ order: 1 })
  return brands;
};

const addBrand = async (params) => {
  const newBrand = new Brand(params);
  await newBrand.save();
  return newBrand;
};

const updateBrand = async (id, params) => {
  const updatedBrand = await Brand.findByIdAndUpdate(id, params, {
    new: true,
  });
  if (!updatedBrand) throw new NotFoundError("Brand not found");
  return updatedBrand;
};

const deleteBrand = async (id) => {
  const deletedBrand = await Brand.findByIdAndDelete(id);
  if (!deletedBrand) throw new NotFoundError("Brand not found");
  return deletedBrand;
};

const brandService = {
  allBrands,
  addBrand,
  updateBrand,
  deleteBrand,
};

module.exports = brandService;
