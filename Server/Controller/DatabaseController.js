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
}

module.exports = DatabaseController;