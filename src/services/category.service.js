const Category = require("../models/Category.model");
const { NotFoundError } = require("../utils/error.utils");
const generateSlug = require("../utils/slug.utils");

const allCategories = async () => {
  const categories = await Category.find()
    .sort({ order: 1 })
    .populate("parentId")
    .populate("image");
  return categories;
};

const addCategory = async (params) => {
  if(!params.slug){
    params.slug = generateSlug(params.name)
  }
  const newCategory = new Category(params);
  await newCategory.save();
  return newCategory;
};

const updateCategory = async (id, params) => {
  const updatedCategory = await Category.findByIdAndUpdate(id, params, {
    new: true,
  });
  if (!updatedCategory) throw new NotFoundError("Category not found");
  return updatedCategory;
};

const deleteCategory = async (id) => {
  const subcategories = await Category.find({ parentId: id });
  for (const subcategory of subcategories) {
    await deleteCategory(subcategory._id);
  }

  const deletedCategory = await Category.findByIdAndDelete(id);
  if (!deletedCategory) throw new NotFoundError("Category not found");

  return deletedCategory;
};

const categoryService = {
  allCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};

module.exports = categoryService;
