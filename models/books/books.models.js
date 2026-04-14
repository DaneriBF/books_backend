import pool from '../../config/db.js';

export class booksModel {
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

  static getAuthorsBookById = async (bookId) => {
    const db = await pool;

    const result = await db.request()
      .input('idBook', bookId)
      .query(`
      SELECT * FROM [Catalog].fnSearchAuthorsBookById(@idBook);
    `);

    const books = result.recordset.map(b => ({
      idBook: b.idBook,
      title: b.title,
      publicationYear: b.publicationYear,
      authors: JSON.parse(b.authors)
    }));

    return books;
  }

  static getBooksByPublicationYear = async (publicationYear) => {
    const db = await pool;

    const result = await db.request()
      .input('year', publicationYear)
      .query(
        `
      SELECT * FROM [Catalog].fnSearchBooksByPublicationYear(@year);
      `
      );

    return result.recordset;
  }

  static postNewBook = async (title, publicationYear) => {
    const db = await pool;

    const result = await db.request()
      .input('title', title)
      .input('publicationYear', publicationYear)
      .execute('[Catalog].splInsertBook');

    return result.recordset;
  }
}