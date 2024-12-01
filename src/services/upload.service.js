const multer = require("multer");
const path = require("path");
const {
  ALLOWED_MIME_TYPES,
  ALLOWED_EXTENSIONS,
} = require("../config/upload.const");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, "../../public/uploads");
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const name = file.originalname;
    const ext = path.extname(name).toLowerCase();
    cb(null, `${Date.now()}${ext}`);
  },
  fileFilter: (req, file, cb) => {
    const name = file.originalname;
    const ext = path.extname(name);
    const mime = file.mimetype;
    if (ALLOWED_MIME_TYPES.includes(mime) && ALLOWED_EXTENSIONS.includes(ext)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const upload = multer({
  limit: 10000000,
  storage,
});

module.exports = upload;
