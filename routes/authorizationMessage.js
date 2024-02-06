const express = require('express');
const AuthorizationMessageController = require('../controllers/GB/AuthorizationMessage');
const router = express.Router();
// const Product = require('../models/productModel');

router.post('/create', AuthorizationMessageController.create);

module.exports = router;
