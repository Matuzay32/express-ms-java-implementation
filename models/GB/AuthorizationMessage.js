const mongoose = require('mongoose');

// Define el esquema para el mensaje de autorización
const authorizationSchema = new mongoose.Schema({
  amount: String,
  '3ds': String,
  fees: [
    {
      amount: Number,
      code: String,
    },
  ],
  entry_mode: String,
  acquirer_code: String,
  type: String,
  commerce: {
    code: String,
    name: String,
    mcc: String,
    postal_code: String,
  },
  tags: [String],
  account_id: String,
  trunc_card_number: String,
  original_currency_id: String,
  date_time: String,
  stan: String,
  action: String,
  request_id: String,
  currency_id: String,
  others_amounts: [String],
});

// Define el esquema para la respuesta del mensaje de autorización
const responseSchema = new mongoose.Schema({
  request_id: String,
  metadata: {
    elapsed_time: String,
  },
  code: String,
  date_created: String,
  cancel_id: String,
});

// Define el esquema principal para el mensaje de autorización
const authorizationMessageSchema = new mongoose.Schema({
  amount: String,
  '3ds': String,
  fees: [
    {
      amount: Number,
      code: String,
    },
  ],
  entry_mode: String,
  acquirer_code: String,
  type: String,
  commerce: {
    code: String,
    name: String,
    mcc: String,
    postal_code: String,
  },
  tags: [String],
  account_id: String,
  trunc_card_number: String,
  original_currency_id: String,
  date_time: String,
  stan: String,
  action: String,
  request_id: String,
  currency_id: String,
  others_amounts: [String],
  response: responseSchema,
  status: Number,
});

// Crea el modelo en Mongoose
const AuthorizationMessage = mongoose.model(
  'AuthorizationMessage',
  authorizationMessageSchema
);

module.exports = AuthorizationMessage;
