const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    const uploadPath = `${__dirname}../../uploads/image`;
    callback(null, uploadPath);
  },
  filename(req, file, callback) {
    console.log('<<<<<<<<<<>>>>>>>>>>>', file);
    const filename = `${file.originalname}`;
    req.savedImagePath = path.join('uploads/image', String(req.body.trail_id), filename);
    callback(null, filename);
  },
});
module.exports = multer({ storage });
