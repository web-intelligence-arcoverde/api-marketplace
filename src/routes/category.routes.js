const {
  createCategory,
  readCategory,
  deleteCategory,
  updateCategory,
  findCategoryById,
} = require('../app/controllers/CategoryController');

const express = require('express');
const router = express.Router();

router.route('/category').post(createCategory);
router.route('/category').get(readCategory);

router.route('/category/:id').delete(deleteCategory);
router.route('/category/:id').put(updateCategory);
router.route('/category/:id').get(findCategoryById);

module.exports = router;
