const mongoose = require("mongoose");
//const  Schema  = mongoose;
const Schema = mongoose.Schema;

const petshop = new Schema({

   nome: String,
    logo: String, 
    categoria: String,
    destaque: Number,
    location: Object, 
    recipient_id: String



});
//const petshop = new Schema({

 //   nome: {
  //      type: String
  //  },
  //  logo: {
   //     type: String

   // },
  //  categoria: {
    //    type: String
   // },
   // destaque: {

  //      type: Number
  //  },
  //  Location: {

  //      type: Object
 //   },
 //   recipient_id: {
 //       type: String
 ///   }
//});

module.exports = mongoose.model('Petshop', petshop);