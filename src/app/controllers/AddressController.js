const asyncHandler = require('express-async-handler');
const Address = require('../model/address');

exports.createAddress = asyncHandler(async (req, res) => {
  try {
    const {name} = req.body;

    const Address = new Address({
      name,
    });

    const createdAddress = await Address.save();

    res.status(201).json(createdAddress);
  } catch (error) {
    res.json({error: true, message: 'efoekf'});
  }
});

exports.readAddresss = asyncHandler(async (req, res) => {
  try {
    const Addresss = await Address.find();
    res.status(201).json(Addresss);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updateAddress = asyncHandler(async (req, res) => {
  try {
    const {name} = req.body;

    const Address = await Address.findById(req.params.id);

    if (Address) {
      Address.name = name;
    }

    const updatedAddress = await Address.save();

    res.json(updatedAddress);
  } catch (error) {
    res.json({error: true, message: 'efoekf'});
  }
});

exports.deleteAddress = asyncHandler(async (req, res) => {
  try {
    const Address = await Address.findById(req.params.id);

    await Address.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, exemple});
  }
});

exports.findAddressById = asyncHandler(async (req, res) => {
  try {
    const Address = await Address.findById(req.params.id);
    res.json(Address);
  } catch (error) {
    res.json({error: true, exemple});
  }
});
