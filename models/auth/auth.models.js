import pool from '../../config/db.js'

export class authModel {
  static loginUser = async (userEmail, userPassword) => {
    const db = await pool;

    const result = await db.request()
      .input('email', userEmail)
      .input('password', userPassword)
      .query(`
      SELECT 
        u.idUser, 
        u.fullName, 
        u.email, 
        r.idRole,
        r.name
      FROM [Users].tblUsers u 
        INNER JOIN [Users].tblRoles r
          ON  u.idRole = r.idRole
      WHERE u.email = @email AND u.password = @password;
    `);
    console.log("Esto se saco del auth.model", result.recordset)

    return result.recordset;
  };

  static getUserById = async (idUser) => {
    const db = await pool;
    console.log("Entro al auth model getUserById")
    const result = await db.request()
      .input('userId', idUser)
      .query(`
      SELECT 
        u.idUser 
      FROM [Users].tblUsers u 
      WHERE u.idUser = @userId;
    `);
    // console.log("El usuario recuperado", result.recordset)

    return result.recordset;
  };

}