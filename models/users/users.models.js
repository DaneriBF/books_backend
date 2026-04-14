import pool from '../../config/db.js'

export class usersModel{

  static getAllUsers = async () => {
    const db = await pool;
    
    const result = await db.request()
      .query(`
        SELECT * FROM [Users].tblUsers
      `)
      
      return result.recordset;
  }

  
  static postCreateUser = async (name, idRole, email, password) => {
    const db = await pool;

    const result = await db.request().
    input('fullName', name).
    input('idRole', idRole).
    input('email', email).
    input('password', password).
    execute('[Users].splInsertuser');

    return result.recordset;
  }
}