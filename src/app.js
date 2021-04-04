import 'express-async-errors';

import exphbs from 'express-handlebars';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { AppError } from './errors';
import routes from './routes';

import './databases';

class App {
  constructor () {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errors();
    this.views();
  }

  middlewares () {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes () {
    this.server.use(routes);
  }

  errors () {
    this.server.use((e, req, res, next) => {
      if (e instanceof AppError) {
        const result = {};

        if (e.message) {
          result.message = e.message;
        }

        if (e.data) {
          result.data = e.data;
        }

        return res.status(e.statusCode).json(result);
      }

      console.error(e);

      return res.status(500).json({ message: 'Internal server error' });
    });
  }

  views () {
    this.server.engine('hbs', exphbs({ extname: '.hbs' }));
    this.server.set('view engine', 'hbs');
    this.server.set('views', path.resolve(__dirname, 'views'));
  }
}

export default new App().server;
