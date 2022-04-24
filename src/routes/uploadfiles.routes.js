const {
  updatefile
} = require('../app/controllers/UploadfilesController');

const express = require('express');
const router = express.Router();

router.route('/update').post(updatefile);
//router.route('/address').get(readAddress);

//router.route('/address/:id').delete(deleteAddress);
//router.route('/address/:id').put(updateAddress);
//router.route('/address/:id').get(findAddressById);

module.exports = router;
