import Router from 'express'
import { userController } from '../../controllers/users/users.controller.js';

export const usersRouter = Router();

usersRouter.get('/', userController.getAllUsers);
usersRouter.post('/', userController.postNewUser);