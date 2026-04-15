import { authService } from "../../services/auth/auth.services.js";

export class authController {
  static async loginUser(req, res) {
    try {
      const { userEmail, userPassword } = req.body;

      const data = await authService.loginUser(userEmail, userPassword);
      //const data = await authModel.loginUser(userEmail, userPassword);
      // console.log("Esto se saco del controller ", res.status(200).json(data));      
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}