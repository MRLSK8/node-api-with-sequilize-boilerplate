import { Model, DataTypes } from 'sequelize';

import { BcryptHelper } from '../helpers';

class User extends Model {
  static init (connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },

      {
        sequelize: connection,
        name: {
          singular: 'user',
          plural: 'users'
        },
        hooks: {
          beforeSave: instance => {
            if (instance.password) {
              instance.password = BcryptHelper.hash(instance.password);
            }
          }
        },
        scopes: {
          withoutPassword: {
            attributes: { exclude: ['password'] }
          }
        }
      }
    );

    return this;
  }

  static associate () {
    // Associations goes here
  }

  validatePassword (password) {
    return BcryptHelper.compare(password, this.password);
  }
}

export default User;
