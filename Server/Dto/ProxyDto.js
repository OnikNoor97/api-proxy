const Library = require("../Core/Library");
const BaseDto = require("./BaseDto");

module.exports = class ProxyDto extends BaseDto {
    constructor() {
        super();
        this.tableName = "Proxy"
        this.columns = ["proxyId", "name", "proxyUrl", "proxyIp", "proxyPort", "isService"];
        return this;
    }

    async create(values) {
        let query = Library.queryObjectToQuery(this.sql.insert(this.tableName, values));
        return await this.db.create(query);
    }

    async read(conditions) {
        conditions = conditions ?? ""
        let query = Library.queryObjectToQuery(this.sql.select(this.tableName, this.columns).where(conditions));
        return await this.db.read(query)
    }
}