import { Router } from 'express';

import registerRoutes from './register.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use('/register', registerRoutes);

routes.use('/auth', authRoutes);

export default routes;
