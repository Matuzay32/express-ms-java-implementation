const express = require('express');
const mongoose = require('./db/db');
const createProdRouter = require('./routes/createProduct');

class YourMarketApp {
  static initializeMiddleware(app) {
    app.use(express.json());
  }

  //Routes of this aplication
  static initializeRoutes(app) {
    app.use('/products/youmarket', createProdRouter);
  }
  //listen server

  static start() {
    const app = express();
    const port = 3004;

    YourMarketApp.initializeMiddleware(app);
    YourMarketApp.initializeRoutes(app);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
}

YourMarketApp.start();
