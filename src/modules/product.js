const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const petshop = require("./petshop");

//const Schema = mongoose.Schema;

///const produto = new Schema({
//petshop_id: {
//type: Schema.Types.ObjectId,
//ref: "Petshop"
//},
//nome: String,
//capa: String,
//preco: Number,
//avaliacoes: Number
//});

//module.exports = mongoose.model("produto", petshop);
////
const Schema = mongoose.Schema;
const product = new Schema({
  nome: {
    type: String,
  },
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: "Petshop",
  },
  preco: {
    type: Number,
  },
  capa: {
    type: String,
  },
  preco: {
    type: Number,
  },
  avaliacoes: {
    type: Number,
  },
});
module.exports = mongoose.model("Product", product);
