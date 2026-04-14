import pool from '../../config/db.js'

export class sessionModel {
  static login = async ({ userEmail, userPassword }) => {
    const db = await pool;

    const result = await db.request()
    .input('email', userEmail)
    .input('password', userPassword)
    .query(`
    SELECT 
      u.idUser,
      u.fullName,
      u.email,
      r.name
    FROM [Users].tblUsers u
      INNER JOIN [Users].tblRoles r
        ON u.idRole = r.idRole
    WHERE u.email = @email AND u.password = @password;
    `);

    return result.recordset;
  }
}