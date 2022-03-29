const asyncHandler = require('express-async-handler');
const Market = require('../model/market');

exports.createMarket = async (req, res) => {
  try {
    const {market_name, logo, location, user_id} = req.body;
    
    if (!market_name || !logo || !location || !user_id ) {
      return res.status(403).send({
        message: "Alguns atributos do market nao foram passados",
      });
    }

    const market = await Market.create({market_name, logo, location, user_id});

    res.json(market);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
};

exports.readMarket = asyncHandler(async (req, res) => {
  try {
    const market = await Market.find();
    res.status(201).json(market);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updateMarket = asyncHandler(async (req, res) => {
  try {
    const {market_name, logo, location} = req.body;

    const market = await Market.findById(req.params.id);

    if (market) {
      market.market_name = market_name;
      market.logo = logo;
      market.location = location;
    }

    const updateMarket = await Market.save();

    res.json(updateMarket);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.deleteMarket = asyncHandler(async (req, res) => {
  try {
    const Market = await Market.findById(req.params.id);

    await Market.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.findMarketById = asyncHandler(async (req, res) => {
  try {
    const market = await Market.findById(req.params.id);
    res.json(market);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});
