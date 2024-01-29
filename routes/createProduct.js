const express = require('express');
const ProductsController = require('../controllers/Products');
const router = express.Router();
// const Product = require('../models/productModel');

router.post('/create', ProductsController.create);

module.exports = router;
