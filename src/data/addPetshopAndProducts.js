const Petshop = require('../modules/petshop');
const Product = require ('../modules/product');
const petshops = require('./petfood.json');
//db 
require('../../database');

const addPetshopsAndProducts = async () =>{

try {
    for (let petshop of petshops){
      const newPetshop = await new Petshop(petshop).save();
      petshop.produtos.map(p => console.log(p));
          await Product.insertMany(petshop.produtos.map(p =>  ({ ...p, petshop_id: newPetshop._id  })))
 }
     console.log('Arquivo subido com sucesso');
    
} catch (error) {
    console.log("este aqui foi o erro" + error);
}

}

addPetshopsAndProducts();