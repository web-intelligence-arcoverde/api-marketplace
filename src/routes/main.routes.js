const { Router } = require('express');
const express = require('express');
const petshop = require('../modules/petshop');
const router = express.Router();

const Petshop = require('../modules/petshop')
const product = require('../modules/product')

//const createSplitTransaction = require(injetar o pagar-me)
router.get('/petshops', async(req, res, next) =>{

try {
    const petshops = await Petshop.find();
    res.json({error: false, petshops});

} catch (error) {
    res.json({ error:true , message: error.message});
}
});

router.get('/petshops/:id', async(req, res, next) =>{

    try {
        const petshop = await Petshop.findById(req.params.id);
        let products = await product.find({
            petshop_id: petshop._id 
        })
        res.json({error: false, petshop:{...Petshop._doc, products}});
    
    } catch (error) {
        res.json({ error:true , message: error.message});
    }
    });

router.post('/purchase', async(req, res) => {
    try {
        const transaction = await createSplitTransaction(req.body)
        res.json(transaction);
    } catch (error) {
        res.json({ error:true , message: error.message});
}
    })

module.exports = router;