import { authModel } from '../models/auth/auth.models.js';

import { verifyToken } from '../utils/jwt.js';


export const authMiddleware = async (req, res, next) => {
  const header = req.headers['authorization'];

  if (!header) {
    return res.status(401).json({ message: 'No autorizado' });
  }
  console.log("Lo recibido en la cabecera es: ",header)
  const token = header.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    // console.log("Token decodificado: ", decoded)

    // console.log("Id recuperado del token: ", decoded.id)
    const user = await authModel.getUserById(decoded.id);
    // console.log("El usuario retornado: ", user)

    if (!user) {
      return res.status(401).json({ message: 'Usuario no existe' });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido' });
  }
};