const BaseModel = require("./BaseModel")

module.exports = class Log extends BaseModel {
    constructor() {
        super();
        this.columns = ["LogId", "sourceIP", "destinationIP", "url", "headers", "body"];
        return this;
    }

    async read(conditions) {
        let query = (arguments.length == 0)
        ? this.sql.select(this.columns)
        : this.sql.select(this.columns).where(conditions);

        return await this.db.read(query);
    }
}