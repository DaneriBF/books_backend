import express, {json} from 'express';
import 'dotenv/config'

import { booksRouter } from './routes/books/books.routes.js';
import { usersRouter } from './routes/users/users.routes.js';

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(json());
app.disable('x-powered-by');

app.use('/session/', () => {
  console.log('gestionando las sesiones')
})
app.use('/books/', booksRouter);
app.use('/users/', usersRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})


