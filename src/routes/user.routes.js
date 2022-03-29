const {
    createUser,
    readUser,
    deleteUser,
    updateUser,
    findUserById,
} = require('../app/controllers/UserController');

const express = require('express');
const router = express.Router();

router.route('/user').post(createUser);
router.route('/user').get(readUser);

router.route('/user/:id').delete(deleteUser);
router.route('/user/:id').put(updateUser);
router.route('/user/:id').get(findUserById);

module.exports = router;
