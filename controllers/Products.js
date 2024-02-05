const Product = require('../models/productModel');
const AuthorizationMessage = require('../models/GB/AuthorizationMessage');

class Products {
  static async create(req, res) {
    try {
      const { body } = req;

      // Determina si el cuerpo tiene ciertos campos específicos de un mensaje de autorización
      const isAuthorizationMessage =
        'amount' in body && '3ds' in body && 'fees' in body;

      console.log(body);

      let newEntity;

      if (isAuthorizationMessage) {
        // Si el cuerpo parece ser un mensaje de autorización, crea una instancia del modelo 'AuthorizationMessage'
        newEntity = new AuthorizationMessage(body);
      } else {
        // De lo contrario, asume que es un producto y crea una instancia del modelo 'Product'
        newEntity = new Product(body);
      }

      // Guarda la nueva entidad en la base de datos MongoDB
      await newEntity.save();

      res.status(201).json({ message: 'Entidad creada exitosamente' });
    } catch (error) {
      console.error('Error al crear la entidad:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

module.exports = Products;
