import express, { Application } from 'express';
import 'express-async-errors';

import routes from './routes';

import globalError from './errors/GlobalError';
import uploadConfig from './config/upload';

import './database';

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.server.use('/files', express.static(uploadConfig.directory));
    this.middlewares();
    this.routes();
    this.server.use(globalError);
  }

  middlewares(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
