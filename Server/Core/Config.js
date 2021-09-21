require('dotenv').config()

class Config {
    constructor() {
        this.MYSQL_SERVER = process.env.MYSQL_SERVER;
        this.MYSQL_USERNAME = process.env.MYSQL_USERNAME;
        this.MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
        this.MYSQL_TABLE = process.env.MYSQL_TABLE;
    }
}

module.exports = Config;