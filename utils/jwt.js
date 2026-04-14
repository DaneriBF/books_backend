import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  console.log("Esto se saco del jwt ",user)
  console.log("Esto se saco del jwt ",user[0].idUser)

  return jwt.sign(
    {
      id: user[0].idUser,
      email: user[0].email
    },
    process.env.JWT_SECRET,
    { expiresIn: '1m' }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};