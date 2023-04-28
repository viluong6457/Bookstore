const { conn, sql } = require("../config/dbconfig");

module.exports = function () {
    this.getAll = async (params, result) => {
        var query = `SELECT * FROM _user`;
        let key = params.key || "";
        if (key) {
            query += ` WHERE fullName LIKE '%${key}%' `;
        }

        try {
            let pool = await conn;
            let res = await pool.request().query(query);
            result(null, res.recordset);
        } catch (error) {
            console.error("Error in start():", error);
            result(error, null);
        }
    };

    this.getOne = async (id, result) => {
        var query = `SELECT * FROM _user WHERE userId = '${id}'`;
        try {
            let pool = await conn;
            let res = await pool.request().query(query);
            result(null, res.recordset);
        } catch (error) {
            console.error("Error in start():", error);
            result(error, null);
        }
    };

    this.getUsers = async (props, result) => {

        var query = `SELECT * FROM _user WHERE (userId = '${props.userId}' AND fullName='${props.fullName}')`;

        console.log(query);

        try {
            let pool = await conn;
            let res = await pool.request().query(query);
            result(null, res.recordset);
        } catch (error) {
            console.error("Error in start():", error);
            result(error, null);
        }
    };

    this.create = async (newUser, result) => {
        const today = new Date();
        const dateString = today.toISOString().slice(0, 10);

        console.log(dateString);
        var query = `
        INSERT INTO _user (fullName, registerDate, address, email, phoneNum)
        VALUES (@fullName, @registerDate, @address, 
                @email, @phoneNum);`;

        console.log(query);

        try {
            let pool = await conn;
            const res = await pool
                .request()
                .input("fullName", sql.NVarChar, newUser.fullName)
                .input("registerDate", sql.VarChar, dateString)
                .input("address", sql.NVarChar, newUser.address)
                .input("email", sql.VarChar, newUser.email)
                .input("phoneNum", sql.NVarChar, newUser.phoneNum)
                .query(query);

            result(null, res);
        } catch (error) {
            console.error("Error in start()::", error);
            result(error, null);
        }
    };

    this.update = async (id, _user, result) => {
        let query = `UPDATE _user
                      SET
                          fullName = @fullName, 
                          registerDate = @registerDate, 
                          address = @address, 
                          email = @email, 
                          phoneNum = @phoneNum, 
                      WHERE userId = '${id}'`;
        try {
            let pool = await conn;
            const res = await pool
                .request()
                .request()
                .input("fullName", sql.NVarChar, newUser.fullName)
                .input("registerDate", sql.VarChar, newUser.registerDate)
                .input("address", sql.NVarChar, newUser.address)
                .input("email", sql.VarChar, newUser.email)
                .input("phoneNum", sql.NVarChar, newUser.phoneNum)
                .query(query);
            result(null, res);
        } catch (error) {
            console.error("Error in start()::", error);
            result(error, null);
        }
    };

    this.delete = async (id, result) => {
        let query = `Delete from _user where userId = '${id}'`;
        try {
            let pool = await conn;
            const res = await pool.request().query(query);
            result(null, res);
        } catch (error) {
            console.error("Error in start()::", error);
            result(error, null);
        }
    };

};