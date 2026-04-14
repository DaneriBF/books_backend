import Routes from 'express'

import { authController } from '../../controllers/auth/auth.controller.js';

export const authRouter = Routes();

authRouter.post('/login', authController.loginUser);
authRouter.post('/signin', () => {
  console.log('Registrando un nuevo usuario')
});