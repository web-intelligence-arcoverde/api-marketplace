const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next) =>{

try {
    res.json({message: false, message: "Teste"});
} catch (error) {
    res.json({ error:true , message: error.message});
}
})

module.exports = router;