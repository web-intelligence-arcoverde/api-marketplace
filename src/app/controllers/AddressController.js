const asyncHandler = require('express-async-handler');
const Address = require('ipaddr.js');
const AD = require('../model/address');

exports.createAddress = asyncHandler(async (req, res) => {
  try {
    const {name, number, cep, ref, district} = req.body;
    const ad = new AD({
      name,
      number, 
      cep, 
      ref, 
      district
    });
    const createAddress = await ad.save();
    res.status(201).json(createAddress);
  } catch (error) {
    res.json({error: true, message: 'Vaitomanocu'});
  }
});
exports.readAddress = asyncHandler(async (req, res) => {
  try {
    const ad = await AD.find();
    res.status(201).json(ad);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.deleteAddress = asyncHandler(async (req, res) => {
  try {
    const {name, number, cep, ref, district} = req.body;

    const ad = await AD.findById(req.params.id);

    if (ad) {
      ad.name = name, number, cep, ref , district;
    }

    const updatedAdress = await ad.save();

    res.json(updatedAdress);
  } catch (error) {
    res.json({error: true, message: 'vai toma no cu'});
  }
});

exports.deleteAdress = asyncHandler(async (req, res) => {
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
    const ad = await AD.findById(req.params.id);
    res.json(ad);
  } catch (error) {
    res.json({error: true, exemple});
  }
}); 
