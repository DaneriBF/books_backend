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
      
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}