import Router from 'express'
import { userController } from '../../controllers/users/users.controllers.js';

export const usersRouter = Router();

usersRouter.get('/', userController.getAllUsers);