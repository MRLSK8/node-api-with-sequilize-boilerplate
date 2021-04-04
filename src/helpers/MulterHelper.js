import multer from 'multer';

import { multerConfig } from '../config';
class MulterHelper {
  constructor () {
    this.upload = multer(multerConfig);
  }

  getUpload () {
    return this.upload;
  }
}

export default new MulterHelper();
