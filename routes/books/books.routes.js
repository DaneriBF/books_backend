import Router from 'express';

import { booksController } from '../../controllers/books/books.controller.js';

import { authMiddleware } from '../../middlewares/auth.middleware.js';

export const booksRouter = Router();

booksRouter.use(authMiddleware)

booksRouter.get('/', booksController.getAllBooks);
booksRouter.get('/authors/:bookId', booksController.getAuthorsBookById);
booksRouter.get('/publicationYear/:publicationYear', booksController.getBooksByPublicationYear)

booksRouter.post('/', booksController.postNewBook);


