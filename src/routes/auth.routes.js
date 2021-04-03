import { Router } from 'express';

import { validationMiddleware } from '../middlewares';
import { AuthController } from '../app/controllers';
import { loginValidator } from '../validators';

const authRoutes = Router();

authRoutes.post('/', validationMiddleware(loginValidator), AuthController.store);

export default authRoutes;
