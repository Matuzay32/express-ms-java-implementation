const mongoose = require('mongoose');

const uri =
  'mongodb://admin:password@localhost:27017/JAVA-YM?authSource=admin&authMechanism=SCRAM-SHA-1';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to the MongoDB database');
});

module.exports = mongoose;
