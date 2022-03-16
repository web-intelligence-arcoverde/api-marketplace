const asyncHandler = require('express-async-handler');
const Address = require('ipaddr.js');
const MARKET = require('../model/market');

exports.createMarket = asyncHandler(async (req, res) => {
  try {
    const {nome, logo, categoria, destaque, location, recipient_id} = req.body;
    const market = new MARKET({
      nome,
      logo, 
      categoria, 
      destaque, 
      location,
      recipient_id
    });
    const createMarket = await market.save();
    res.status(201).json(createAddress);
  } catch (error) {
    res.json({error: true, message: 'Vaitomanocu'});
  }
});
exports.readMarket = asyncHandler(async (req, res) => {
  try {
    const ad = await AD.find();
    res.status(201).json(ad);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.deleteMarket = asyncHandler(async (req, res) => {
  try {
    const {nome, logo, categoria, destaque, location, recipient_id} = req.body;

    const market = await MARKET.findById(req.params.id);

    if (market) {
      market.name = nome,
      logo, 
      categoria, 
      destaque, 
      location,
      recipient_id
    }

    const updatedMarket = await market.save();

    res.json(updatedMarket);
  } catch (error) {
    res.json({error: true, message: 'vai toma no cu'});
  }
});
exports.deleteMarket = asyncHandler(async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);

    await address.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, exemple});
  }
});

exports.findById = asyncHandler(async (req, res) => {
  try {
    const market = await MARKET.findById(req.params.id);
    res.json(market);
  } catch (error) {
    res.json({error: true, exemple});
  }
}); 
