const express = require("express");
const { uploadController } = require("../controllers");
const upload = require("../services/upload.service");

const uploadRouter = express.Router();

uploadRouter.post("/", upload.single("image"), uploadController.uploadImage);
uploadRouter.delete("/:name", uploadController.deleteImage);

module.exports = uploadRouter;
