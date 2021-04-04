import { Router } from 'express';

import { validationMiddleware } from '../middlewares';
import { UserController } from '../controllers';
import { updateValidator } from '../validators';

const userRoutes = Router();

userRoutes.delete('/', UserController.destroy);

userRoutes.put('/', validationMiddleware(updateValidator), UserController.update);

export default userRoutes;
