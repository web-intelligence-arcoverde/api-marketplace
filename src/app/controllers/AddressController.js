const asyncHandler = require('express-async-handler');
const Address = require('../model/address');

exports.createAddress = async (req, res) => {
  try {
    const {
      postal_code,
      uf,
      city,
      district,
      street,
      ref_point,
      number,
      user_id,
    } = req.body;

    if (!postal_code || !uf || !city || !district || !street || !number || !user_id ) {
      return res.status(403).send({
        message: "Alguns atributos nao foram passados",
      });
    }

    const address = await Address.create({
      postal_code,
      uf,
      city,
      district,
      street,
      ref_point,
      number,
      user_id,
    });

    res.json(address);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
};

exports.readAddress = asyncHandler(async (req, res) => {
  try {
    const address = await Address.find();
    res.status(201).json(address);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updateAddress = asyncHandler(async (req, res) => {
  try {
    const {postal_code, uf, city, district, street, ref_point, number} =
      req.body;

    const address = await Address.findById(req.params.id);

    if (address) {
      address.postal_code = postal_code;
      address.uf = uf;
      address.city = city;
      address.district = district;
      address.street = street;
      address.ref_point = ref_point;
      address.number = number;
    }

    const updateAddress = await address.save();

    res.json(updateAddress);
  } catch (error) {
   res.json({error: true, message: error.message});
  }
});

exports.deleteAddress = asyncHandler(async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);

    await address.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.findAddressById = asyncHandler(async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    res.json(address);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});
