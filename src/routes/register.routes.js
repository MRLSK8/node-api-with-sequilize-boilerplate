import { Router } from 'express';

import { validationMiddleware } from '../middlewares';
import { RegisterController } from '../controllers';
import { registerUserValidator } from '../validators';

const registerRoutes = Router();

registerRoutes.post('/', validationMiddleware(registerUserValidator), RegisterController.store);

export default registerRoutes;
