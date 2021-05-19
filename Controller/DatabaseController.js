require('dotenv').config();
const mysql = require('mysql2');

class DatabaseController
{
    constructor(dbName) 
    {
        switch(dbName) {
            case null:
            case undefined:
                if (process.env.DEV_MODE) {
                    this.server = process.env.DEV_SERVER;
                    this.dbUsername = process.env.DEV_DB_USERNAME;
                    this.dbPassword = process.env.DEV_DB_PASSWORD;
                    this.table = process.env.DEV_DB_TABLE;
                } else {
                    this.server = process.env.PRODUCTION_SERVER;
                    this.dbUsername = process.env.PRODUCTION_DB_USERNAME;
                    this.dbPassword = process.env.PRODUCTION_DB_PASSWORD;
                    this.table = process.env.PRODUCTION_DB_TABLE;
                }
                break;
            
            case "wsAuth":
                this.server = "[REDACTED]";
                this.dbUsername = "[REDACTED]";
                this.dbPassword = "[REDACTED]";
                this.table = "[REDACTED]";
                break;
        }

    }

    async SelectQuery(sql, parameters = null)
    {
        const pool = mysql.createConnection({ host: this.server, user: this.dbUsername, password: this.dbPassword, database: this.table });
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
        return rows;
    }
    
    async InsertUpdateQuery(sql, parameters = null)
    {
        const pool = mysql.createConnection({ host: this.server, user: this.dbUsername, password: this.dbPassword, database: this.table });
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(sql, parameters);
        pool.end();
        return rows.affectedRows;
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