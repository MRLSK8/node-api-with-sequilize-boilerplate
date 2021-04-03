import { Router } from 'express';

import { UserController } from '../controllers';

const userRoutes = Router();

userRoutes.delete('/:id/delete', UserController.destroy);

export default userRoutes;
