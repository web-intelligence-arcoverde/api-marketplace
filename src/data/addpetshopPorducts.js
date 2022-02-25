const Petshop = require('../modules/petshop');
const Product = require ('../modules/product');
const petshops = require('./petfood.json');
//db 
require('../db');

const addPetshopsAndProducts = async () =>{

try {
    for (let petshop of petshops){
        const newPetshop = await new Petshop(petshop).save();
           await Product.insertMany(
        petshop.produtos.map((p) => ({ ... P, petshop_id: newPetshop.petshop._id}))
    ); 
     }
     console.log('Final Script final de teste');
    
} catch (error) {
    console.log(error.message);
}

}

addPetshopsAndProducts();