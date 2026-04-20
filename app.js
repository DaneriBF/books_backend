//Modificarlo unicamente en la rama feat/app
import express, {json} from 'express';
import cors from 'cors';
import 'dotenv/config'

import { authRouter } from './routes/auth/auth.routes.js';
import { booksRouter } from './routes/books/books.routes.js';
import { usersRouter } from './routes/users/users.routes.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(corsMiddleware);
app.use(json());
app.disable('x-powered-by');

app.use('/auth/', authRouter);

app.use('/books/', booksRouter);
app.use('/users/', usersRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})


