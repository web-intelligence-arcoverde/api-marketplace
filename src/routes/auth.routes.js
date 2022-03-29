const { authUser } = require('../app/controllers/AuthController');

const express = require('express');
const router = express.Router();

router.route('/user/auth').post(authUser);

module.exports = router;
