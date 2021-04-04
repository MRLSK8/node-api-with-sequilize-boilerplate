import bcrypt from 'bcryptjs';
class BcryptHelper {
  hash (password) {
    return bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));
  }

  compare (password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

export default new BcryptHelper();
