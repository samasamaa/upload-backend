const express = require("express");
const uploadRouter = require("./upload.router");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

router.use("/upload", uploadRouter);

module.exports = router;
