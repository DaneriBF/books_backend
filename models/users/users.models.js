import pool from '../../config/db.js'

export class usersModel {

  static getAllUsers = async () => {
    const db = await pool;

    const result = await db.request()
      .query(`
        SELECT * FROM [Users].tblUsers
      `)

    return result.recordset;
  }


  static postCreateUser = async (userName, idRole, userEmail, userPassword) => {
    const db = await pool;

    const result = await db.request().
      input('fullName', userName).
      input('idRole', idRole).
      input('email', userEmail).
      input('password', userPassword).
      execute('[Users].splInsertuser');

    return result.recordset;
  }

  static patchUser = async (userEmail, userNewPassword) => {
    const db = await pool;

    const result = await db.request().
      input('email', userEmail).
      input('newPassword', userNewPassword).
      execute('[Users].splUpdateUserPassword');

    return result.recordset;
  }

  // static patchUser = async (userEmail, userNewPassword) => {
  //   const db = await pool;

  //   const result = await db.request().
  //   input('idRole', 1).
  //   input('idUser', 1).
  //   execute('[Users].splOutputTest');

  //   return result.recordset;
  // }
}