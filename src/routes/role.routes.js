const express = require('express');
const router = express.Router();
const {
  createRole,
  readRoles,
  updateRole,
  deleteRole,
  findRoleById,
} = require('../app/controllers/RoleController');

router.route('/role', createRole);
router.route('/role').get(readRoles);

router.route('/role/:id').delete(deleteRole);
router.route('/role/:id').put(updateRole);
router.route('/role/:id').get(findRoleById);

module.exports = router;
