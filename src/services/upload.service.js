const Image = require("../models/Image.model");

const uploadImage = async (file) => {
  const newImage = new Image({
    url: `/uploads/${file.filename}`,
  });

  await newImage.save();
  return newImage;
};

const uploadService = {
  uploadImage,
};

module.exports = uploadService;
