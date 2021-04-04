import { Router } from 'express';

import registerRoutes from './register.routes';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';

import { jwtMiddleware } from '../middlewares';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    Author: 'Marcelo Lima',
    Github: 'https://github.com/mrlsk8',
    Project: 'Node API',
    Version: '1.0.0',
    Status: 'Online',
  });
});

routes.use('/register', registerRoutes);

routes.use('/auth', authRoutes);

routes.use('/user', jwtMiddleware, userRoutes);

export default routes;
