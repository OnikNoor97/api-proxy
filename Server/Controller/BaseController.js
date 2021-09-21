const Config = require("../Core/Config");
const db = require("../Core/Database");

module.exports = class BaseController extends Config {
    constructor() {
        super();
        this.db = new db(this.MYSQL_USERNAME, this.MYSQL_USERNAME, this.MYSQL_ROOT_PASSWORD, this.MYSQL_TABLE);
    }
}
