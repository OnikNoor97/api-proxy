const db = require("../Core/Database");

class BaseController {
    constructor() {
        this.db = new db('localhost', 'root', process.env.MYSQL_ROOT_PASSWORD, 'APIProxy');
    }
}

module.exports = BaseController;