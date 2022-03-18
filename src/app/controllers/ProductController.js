const asyncHandler = require('express-async-handler');
const Product = require('../model/Product');

exports.createProduct = asyncHandler(async (req, res) => {
  try {
    const {name, logo, category_id, price, market_id} = req.body;

    const product = await Product.create({
      name,
      logo,
      price,
      category_id,
      market_id,
    });

    res.status(201).json(product);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.readProducts = asyncHandler(async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(201).json(Products);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updateProduct = asyncHandler(async (req, res) => {
  try {
    const {name, logo, category_id, preco} = req.body;

    const Product = await Product.findById(req.params.id);

    if (Product) {
      Product.name = name;
      (Product.logo = logo),
        (Product.category_id = category_id),
        (Product.preco = preco);
    }

    const updatedProduct = await Product.save();

    res.json(updatedProduct);
  } catch (error) {
    res.json({error: true, message: 'efoekf'});
  }
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);

    await Product.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, exemple});
  }
});

exports.findProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});
