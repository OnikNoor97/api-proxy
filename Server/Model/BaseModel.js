const Config = require("../Core/Config");
const db = require("../Core/Database");
const sql = require('sql-query-generator')
sql.use("mysql");

module.exports = class BaseModel extends Config {
    constructor() {
        super();
        this.db = new db(this.MYSQL_SERVER, this.MYSQL_USERNAME, this.MYSQL_ROOT_PASSWORD, this.MYSQL_TABLE);
        this.sql = sql;
        return this;
    }
}
