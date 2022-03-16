const asyncHandler = require('express-async-handler');
const CT = require('../model/address');

exports.createAddress = asyncHandler(async (req, res) => {
  try {
    const {name, number, cep, ref, district} = req.body;
    const ct = new CT({
      name,
      number, 
      cep, 
      ref, 
      district
    });
    const createAddress = await ct.save();
    res.status(201).json(createAddress);
  } catch (error) {
    res.json({error: true, message: 'Vaitomanocu'});
  }
});
exports.readMarket = asyncHandler(async (req, res) => {
  try {
    const ct = await CT.find();
    res.status(201).json(ad);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updatedCategory = asyncHandler(async (req, res) => {
  try {
    const {name, number, cep, ref, district} = req.body;

    const ct = await CT.findById(req.params.id);

    if (ct) {
      ct.name = name, number, cep, ref , district;
    }

    const updatedCategory = await ad.save();

    res.json(updatedCategory);
  } catch (error) {
    res.json({error: true, message: 'vai toma no cu'});
  }
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  try {
    const ct = await CT.findById(req.params.id);

    await ct.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, exemple});
  }
});

exports.findCategoryById = asyncHandler(async (req, res) => {
  try {
    const ct = await CT.findById(req.params.id);
    res.json(ct);
  } catch (error) {
    res.json({error: true, exemple});
  }
}); 
