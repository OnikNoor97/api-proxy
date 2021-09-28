const Library = require("../Core/Library");
const BaseDto = require("./BaseDto");

module.exports = class LogDto extends BaseDto {
    constructor() {
        super();
        this.tableName = "Log"
        this.columns = ["LogId", "method", "hostname", "sourceIP", "url", "headers", "queryParams", "body"];
        return this;
    }

    async create(values) {
        let query = Library.queryObjectToQuery(this.sql.insert(this.tableName, values));
        return await this.db.create(query);
    }

    async read(conditions) {
        let query = Library.queryObjectToQuery(this.sql.select(this.tableName, this.columns).where(conditions));
        return await this.db.read(query)
    }
}
