const {
    createProduct,
    readProducts,
    deleteProduct,
    updateProduct,
    findProductById,
} = require('../app/controllers/ProductController');

const express = require('express');
const router = express.Router();

router.route('/product').post(createProduct);
router.route('/product').get(readProducts);

router.route('/product/:id').delete(deleteProduct);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').get(findProductById);

module.exports = router;
