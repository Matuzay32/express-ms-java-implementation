const authorizationMessage = require('../../models/GB/AuthorizationMessage');

class AuthorizationMessage {
  //GB AuthorizationMessage
  static async create(req, res) {
    try {
      const { body } = req;

      let newEntity = new authorizationMessage(body);

      // Guarda la nueva entidad en la base de datos MongoDB
      await newEntity.save();

      res.status(201).json({ message: 'Entidad creada exitosamente' });
    } catch (error) {
      console.error('Error al crear la entidad:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

module.exports = AuthorizationMessage;
