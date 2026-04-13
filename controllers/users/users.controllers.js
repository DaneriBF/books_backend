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


}