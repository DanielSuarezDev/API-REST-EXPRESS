const express = require('express');
const ProductService = require('../services/product.services');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await service.findOne(id);
  res.json(products);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const products = await service.create(body);
  res.status(201).json(products);
});
router.put('/:id', async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const products = await service.update(id, body);
  res.json(products);
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await service.delete(id);
  res.json(products);
});

module.exports = router;
