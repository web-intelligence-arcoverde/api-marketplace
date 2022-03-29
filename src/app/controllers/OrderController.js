const asyncHandler = require('express-async-handler');
const Order = require('../model/order');

exports.createOrder = asyncHandler(async (req, res) => {
    try {
        const { products, user_id } = req.body;
        if (!products || !user_id) {
            return res.status(403).send({
                message: 'Alguns atributos do order nao foram passados',
            });
        }

        const order = new Order({ products, user_id });

        let result = await order.save();

        res.json(result);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

exports.readOrder = asyncHandler(async (req, res) => {
    try {
        const order = await Order.find();
        res.status(201).json(order);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

exports.updateOrder = asyncHandler(async (req, res) => {
    try {
        const { products } = req.body;

        const order = await Order.findById(req.params.id);

        if (order) {
            order.products = products;
        }

        const updateOrder = await order.save();

        res.json(updateOrder);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

exports.deleteOrder = asyncHandler(async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        await order.delete();

        res.json({ error: false, message: 'deletado' });
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

exports.findOrderById = asyncHandler(async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});
