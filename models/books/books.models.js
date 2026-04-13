import pool from '../../config/db.js';

export class booksModel{
  static getAllBooks = async () => {
  const db = await pool;

  const result = await db.request().query(`
    SELECT 
      idBook,
      title
    FROM Catalog.tblBooks
  `);

  return result.recordset;
};

}