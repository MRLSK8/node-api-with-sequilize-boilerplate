import { Router } from 'express';

import { RegisterController } from '../app/controllers';

const registerRoutes = Router();

registerRoutes.post('/', RegisterController.store);

export default registerRoutes;
