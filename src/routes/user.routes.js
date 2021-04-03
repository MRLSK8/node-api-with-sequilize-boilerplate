import { Router } from 'express';

import { UserController } from '../controllers';

const userRoutes = Router();

userRoutes.delete('/', UserController.destroy);

userRoutes.put('/', UserController.update);

export default userRoutes;
