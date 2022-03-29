const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new mongoose.Schema({
    market_id: { type: mongoose.Schema.ObjectId, ref: 'Market' },
    product_id: { type: mongoose.Schema.ObjectId, ref: 'Product' },

    quantity: Number,

    status: {
        type: String,
        default: 'Not processed',
        enum: [
            'Not processed',
            'Processing',
            'Shipped',
            'Delivered',
            'Cancelled',
        ],
    },
});

const Order = new Schema({
    products: [Cart],
    user_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
    updated: Date,
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Order', Order);
