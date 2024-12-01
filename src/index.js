const express = require("express");
const config = require("./config");
const cors = require("cors");
const router = require("./routes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.use(router);

app.listen(config.port, (err) => {
  if (!err) console.log(`Application is running on port ${config.port}`);
});
