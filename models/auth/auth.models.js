import pool from '../../config/db.js'

export class authModel{
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
    console.log("Esto se saco del auth.model" ,result.recordset)

    return result.recordset;
  };

  static getUserById = async (userId) => {
    const db = await pool;

    const result = await db.request()
    .input('idUser', userId)
    .query(`
      SELECT 
        u.idUser, 
        u.fullName, 
        u.email
      FROM [Users].tblUsers u 
      WHERE u.idUser = @idUser
    `);
    console.log("Esto se saco del auth.model" ,result.recordset)

    return result.recordset;
  };

}