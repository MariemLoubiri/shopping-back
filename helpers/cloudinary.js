const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: 'daiyfswfh',
    api_key: "225647859313612",
    api_secret: "BpzrZa3cjxyl-ghx3mxzRHtJF0g",
  });

  const storage = new multer.memoryStorage();

  async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  
    return result;
  }

  const upload = multer({ storage });

  module.exports = { upload, imageUploadUtil };