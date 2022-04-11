const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      age: Math.floor(Math.random() * 10),
    });
  }
  res.json(products);
});

router.get('/age', (req, res) => {
  res.json({
    name: faker.commerce.productName(),
    age: Math.floor(Math.random() * 10),
  });
});

module.exports = router;
