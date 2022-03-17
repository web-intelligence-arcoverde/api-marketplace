const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Market = new Schema({
  nome: {
    type: String,
  },
  logo: {
    type: String,
  },
  location: {
    type: Object,
  },
});

module.exports = mongoose.model('Market', Market);
