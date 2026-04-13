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

}