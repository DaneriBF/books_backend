import express, {json} from 'express';
import 'dotenv/config'

import { booksRouter } from './routes/books/books.routes.js';

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(json());
app.disable('x-powered-by');

app.use('/books/', booksRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})


