import { Router } from 'express';

import { UserController } from '../controllers';

const userRoutes = Router();

userRoutes.post('/user', UserController.store);

export default userRoutes;
