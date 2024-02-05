const Product = require('../models/productModel');
const AuthorizationMessage = require('../models/GB/AuthorizationMessage');

class Products {
  static async create(req, res) {
    try {
      const { body } = req;
      console.log(body);

      let newEntity;

      if ('amount' in body && '3ds' in body && 'fees' in body) {
        // Si el cuerpo parece ser un mensaje de autorización, crea una instancia del modelo 'AuthorizationMessage'
        newEntity = new AuthorizationMessage(body);
      } else if ('forApproval' in body && 'productShortDesc' in body) {
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
