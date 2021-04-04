import mimeTypes from 'mime-types';
import multer from 'multer';
import path from 'path';

import { StringHelper } from '../helpers';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', 'tmp'));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${StringHelper.random()}.${mimeTypes.extension(file.mimetype)}`
    );
  }
});

export default { storage };
