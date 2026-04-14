import { usersModel } from "../../models/users/users.models.js";

export class userController {
  static async getAllUsers(req, res) {
    try {
      const data = await usersModel.getAllUsers();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async postNewUser(req, res) {
    try {
      console.log(req.body)
      const { name, idRole, email, password } = req.body;
      const data = await usersModel.postCreateUser(name, idRole, email, password);

      res.status(201).json(data);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}