import { booksModel } from "../../models/books/books.models.js";

export class booksController {
  static async getAll(req, res) {
    try {
      const data = await booksModel.getAllBooks();
      
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}