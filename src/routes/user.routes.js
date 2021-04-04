import { Router } from 'express';

import { validationMiddleware } from '../middlewares';
import { updateUserValidator } from '../validators';
import { UserController } from '../controllers';

const userRoutes = Router();

userRoutes.delete('/', UserController.destroy);

userRoutes.put('/', validationMiddleware(updateUserValidator), UserController.update);

export default userRoutes;
