const express = require("express");
const router = express.Router();
const upload = require("../app/config/common");
const { uploadFile } = require("../app/controllers/UploadfilesController");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
router.post("/single", upload.single("image"), async (req, res) => {
  console.log(req.file);
  // uploading to AWS S3
  const result = await uploadFile(req.file);  // Calling above function in s3.js
  console.log("S3 response", result);
  // You may apply filter, resize image before sending to client
  // Deleting from local if uploaded in S3 bucket
  await unlinkFile(req.file.path);
  res.send({
    status: "success",
    message: "Arquivo Subido com sucesso!",
    data: req.file,
  });
});
module.exports = router;
