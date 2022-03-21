const Cart = require('./cart');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
  products: [Cart],
  user_id: {type: mongoose.Schema.ObjectId, ref: 'User'},
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Order', Order);
