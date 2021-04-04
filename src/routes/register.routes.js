import { Router } from 'express';

import { validationMiddleware } from '../middlewares';
import { RegisterController } from '../controllers';
import { registerValidator } from '../validators';

const registerRoutes = Router();

registerRoutes.post('/', validationMiddleware(registerValidator), RegisterController.store);

export default registerRoutes;
