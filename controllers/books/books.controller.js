import { booksModel } from "../../models/books/books.models.js";

export class booksController {
  static async getAllBooks(req, res) {
    try {
      const data = await booksModel.getAllBooks();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAuthorsBookById(req, res) {
    try {
      const { bookId } = req.params;

      const data = await booksModel.getAuthorsBookById(bookId);

      const processedData = data.map(b => ({
        idBook: b.idBook,
        title: b.title,
        publicationYear: b.publicationYear,
        authors: JSON.parse(b.authors)
      }));

      console.log(processedData);

      res.status(200).json(processedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBooksByPublicationYear(req, res) {
    try {
      const { publicationYear } = req.params;

      const data = await booksModel.getBooksByPublicationYear(publicationYear);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async postNewBook(req, res) {
    try {
      const { title, publicationYear } = req.body;

      const data = await booksModel.postNewBook(title, publicationYear);

      res.status(201).json(data);
    } catch {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPaginatedAuthors(req, res) {
    try {
      const { pageSize, pageNumber } = req.params;

      const data = await booksModel.getPaginatedAuthors(pageSize, pageNumber);

      res.status(200).json(data);
    } catch {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTotalAuthors(req, res){
    try {
      const data = await booksModel.getTotalAuthors();

      res.status(200).json(data);
    } catch {
      res.status(500).json({ error: error.message });
    }
  }
}