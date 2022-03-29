const {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder,
    findOrderById,
} = require('../app/controllers/OrderController');

const express = require('express');
const router = express.Router();

router.route('/order').post(createOrder);
router.route('/order').get(readOrder);

router.route('/order/:id').delete(deleteOrder);
router.route('/order/:id').put(updateOrder);
router.route('/order/:id').get(findOrderById);

module.exports = router;
