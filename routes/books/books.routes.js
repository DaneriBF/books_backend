import Router from 'express';

import { booksController } from '../../controllers/books/books.controller.js';

export const booksRouter = Router();

booksRouter.get('/', booksController.getAll);

