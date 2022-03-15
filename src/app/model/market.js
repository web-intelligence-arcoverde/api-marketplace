const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petshop = new Schema({
  nome: {
    type: String,
  },
  logo: {
    type: String,
  },
  categoria: {
    type: String,
  },
  destaque: {
    type: Number,
  },
  location: {
    type: Object,
  },
  recipient_id: {
    type: String,
  },
});

module.exports = mongoose.model("Petshop", petshop);
