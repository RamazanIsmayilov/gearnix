const uploadService = require("../services/upload.service");
const { ValidationError } = require("../utils/error.utils");

const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) throw new ValidationError("file is required");
    const newImage = await uploadService.uploadImage(req.file);
    res.json(newImage);
  } catch (error) {
    next(error);
  }
};

const uploadController = {
  uploadImage,
};

module.exports = uploadController;
