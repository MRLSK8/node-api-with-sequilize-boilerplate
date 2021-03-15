import { Router } from 'express';

import { UserController } from '../app/controllers';

const userRoutes = Router();

userRoutes.post('/', UserController.store);

export default userRoutes;
