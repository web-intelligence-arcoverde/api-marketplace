const asyncHandler = require('express-async-handler');
const Category = require('../model/category');

exports.createCategory = async (req, res) => {
  try {
    const {name} = req.body;

    const category = await Category.create({name});

    res.json(category);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
};

exports.readCategory = asyncHandler(async (req, res) => {
  try {
    const category = await Category.find();
    res.status(201).json(category);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updateCategory = asyncHandler(async (req, res) => {
  try {
    const {name} = req.body;

    const category = await Category.findById(req.params.id);

    if (category) {
      category.name = name;
    }

    const updateCategory = await category.save();

    res.json(updateCategory);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    await category.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.findCategoryById = asyncHandler(async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});
