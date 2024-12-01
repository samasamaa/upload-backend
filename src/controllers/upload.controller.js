const fs = require("fs/promises");
const path = require("path");

const uploadImage = (req, res) => {
  if (req.file) {
    res.json({ message: "File uploaded", file: req.file });
  } else {
    res.status(400).json({ message: "Error during upload" });
  }
};

const deleteImage = async (req, res) => {
  let name = req.params.name;
  await fs.rm(path.join(__dirname, "../../public/uploads", name));
  return res.json({ message: true });
};

module.exports = {
  uploadImage,
  deleteImage,
};
