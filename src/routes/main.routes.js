const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Petshop = require('../modules/petshop')
const product = require('../models/product')

//const createSplitTransaction = require(injetar o pagar-me)
router.get('/petshops/:id', async(req, res, next) =>{

try {
    const petshops = await Petshop.findById(req.params.id);
    let products = await product.find({
        petshop_id: petshop._id});

        res.json({ error: false, petshop: {...petshop._doc, products}})
    res.json({error: false, petshops});
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