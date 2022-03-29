const {
    createRole,
    readRoles,
    updateRole,
    deleteRole,
    findRoleById,
} = require('../app/controllers/RoleController');

const express = require('express');
const router = express.Router();

router.route('/role').post(createRole);
router.route('/role').get(readRoles);

router.route('/role/:id').delete(deleteRole);
router.route('/role/:id').put(updateRole);
router.route('/role/:id').get(findRoleById);

module.exports = router;
