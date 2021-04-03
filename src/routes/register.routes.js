import { Router } from 'express';

import { RegisterController } from '../controllers';

const registerRoutes = Router();

registerRoutes.post('/', RegisterController.store);

export default registerRoutes;
