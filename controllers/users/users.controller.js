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
      const { userName, idRole, userEmail, userPassword } = req.body;
      const data = await usersModel.postCreateUser(userName, idRole, userEmail, userPassword);

      if (!data) {
        throw new Error('Ya existe un usuario con este correo electrónico');
      }

      res.status(201).json(data);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  }

  static async patchUser(req, res) {
    try {
      const { userEmail, userNewPassword } = req.body;
      const data = await usersModel.patchUser(userEmail, userNewPassword);

      res.status(200).json(data);
    } catch (error) {
      res.status(409).json({ error: error.message })
    }
  }
}