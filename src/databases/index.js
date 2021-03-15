import { Sequelize } from 'sequelize';

import databaseConfig from '../config/database';

import {
  User
} from '../app/models';

const models = [
  User
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    this.connection
      .authenticate()
      .then(() => {
        console.log(
          `Connected successfully with database on port ${process.env.DB_PORT}`,
        );
      })
      .catch(() => {
        console.log(
          `Connection unsuccessfully database on port ${process.env.DB_PORT}`,
        );
      });

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
