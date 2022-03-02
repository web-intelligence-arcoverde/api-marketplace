const Petshop = require('../modules/petshop');
const Product = require ('../modules/product');
const petshops = require('./petfood.json');
//db 
require('../../database');

const addPetshopsAndProducts = async () =>{

try {
    for (let petshop of petshops){
        const newPetshop = await new Petshop( ).save();
           await Product.insertMany(petshop.produtos.map(p =>  ({ ...p, petshop_id: newPetshop.petshop_id   }))
           )
 }
     console.log('Final Script final de teste');
    
} catch (error) {
    console.log("este aqui foi o erro" + error);
}

}

addPetshopsAndProducts();