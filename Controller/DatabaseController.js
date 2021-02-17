require('dotenv').config();
const mysql = require('mysql2');

class DatabaseController
{
    constructor() 
    {
        if (process.env.DEV_MODE)
        {
            this.server = process.env.DEV_SERVER;
            this.dbUsername = process.env.DEV_DB_USERNAME;
            this.dbPassword = process.env.DEV_DB_PASSWORD;
            this.table = process.env.DEV_DB_TABLE;
        }
        else
        {
            this.server = process.env.PRODUCTION_SERVER;
            this.dbUsername = process.env.PRODUCTION_DB_USERNAME;
            this.dbPassword = process.env.PRODUCTION_DB_PASSWORD;
            this.table = process.env.PRODUCTION_DB_TABLE;
        }
    }

    async getLength(sql, parameters)
    {
        const pool = mysql.createConnection({ host: this.server, user: this.dbUsername, password: this.dbPassword, database: this.table });
        const promisePool = await pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
    
        return rows.length;
    }

    async getUpdatedRows(sql, parameters)
    {
        const pool = mysql.createConnection({ host: this.server, user: this.dbUsername, password: this.dbPassword, database: this.table });
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
    
        return rows.changedRows;
    }
}

module.exports = DatabaseController;