const BaseModel = require("./BaseModel")

module.exports = class Log extends BaseModel {
    constructor() {
        super();
        this.columns = ["LogId", "sourceIP", "destinationIP", "url", "headers", "body"];
        return this;
    }

    async read(conditions) {
        let query = (arguments.length == 0)
        ? this.sql.select("Log", this.columns).text
        : this.sql.select("Log", this.columns).where(conditions).text;

        let results = await this.db.read(query);
        return results;
    }
}