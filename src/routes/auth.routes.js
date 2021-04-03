import { Router } from 'express';

import { AuthController } from '../app/controllers';

const authRoutes = Router();

authRoutes.post('/', AuthController.store);

export default authRoutes;
