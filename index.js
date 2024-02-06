const express = require('express');
const mongoose = require('./db/db');
const createProdRouter = require('./routes/createProduct');
const authorizationMessage = require('./routes/authorizationMessage');

class YourMarketApp {
  static initializeMiddleware(app) {
    app.use(express.json());
  }

  //Routes of this aplication
  static initializeRoutes(app) {
    app.use('/products/ym', createProdRouter);
    app.use('/authorization/gb', authorizationMessage);
  }
  //listen server

  static start() {
    const app = express();
    const port = 3004;

    //ESCUCHA EN EL PUERTO QUE SE LE PROPORCIONE
    YourMarketApp.listener(app, port);

    //PERMITE LEER LOS JSON
    YourMarketApp.initializeMiddleware(app);

    //ACA SE INICIALIZAN LAS RUTAS
    YourMarketApp.initializeRoutes(app);
  }

  static listener(app, port) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
}

YourMarketApp.start();
