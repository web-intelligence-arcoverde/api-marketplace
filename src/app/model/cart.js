import mongoose from 'mongoose';

const Cart = new mongoose.Schema({
  market_id: {type: mongoose.Schema.ObjectId, ref: 'Market'},
  product_id: {type: mongoose.Schema.ObjectId, ref: 'Product'},

  quantity: Number,

  status: {
    type: String,
    default: 'Not processed',
    enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
  },
});

module.exports = mongoose.model('Cart', Cart);
