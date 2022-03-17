const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Address = new Schema({
  postal_code: {
    type: String,
  },

  city: {
    type: String,
  },

  district: {
    type: String,
  },

  street: {
    type: String,
  },

  ref_point: {
    type: String,
  },

  number: {
    type: String,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Address', Address);
