const Product = require('../models/productModel');

class Products {
  static async create(req, res) {
    try {
      const { body } = req;

      const productData = body;

      // Crea una nueva instancia del modelo 'Product' con los datos del cuerpo
      const newProduct = new Product(productData);

      // Guarda el nuevo producto en la base de datos MongoDB
      await newProduct.save();

      res.status(201).json({ message: 'Producto creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

module.exports = Products;
