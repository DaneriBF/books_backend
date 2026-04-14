import { authModel } from "../../models/auth/auth.models.js";
import { generateToken } from "../../utils/jwt.js";

export class authService {

  static async loginUser(userEmail, userPassword) {
    const user = await authModel.loginUser(userEmail, userPassword);
    console.log("Esto se sacó del auth.service: ", user)
    //Si no existe el usuario
    if (!user) {
      throw new Error('Usuario no existe');
    }

    return generateToken(user);
  }

  static async logoutUser(userEmail, userPassword) {
    const user = await authModel.loginUser(userEmail, userPassword);
    console.log("Esto se sacó del auth.service: ", user)
    //Si no existe el usuario
    if (!user) {
      throw new Error('Usuario no existe');
    }

    return generateToken(user);
  }
}