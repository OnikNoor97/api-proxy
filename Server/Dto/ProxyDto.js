const Library = require("../Core/Library");
const BaseDto = require("./BaseDto");
const _ = require('underscore');

module.exports = class ProxyDto extends BaseDto {
    constructor() {
        super();
        this.tableName = "Proxy"
        this.columns = ["proxyId", "name", "proxyUrl", "proxyIp", "proxyPort", "isService"];
        return this;
    }

    async create(data) {
        let columns = _.without(this.columns, "proxyId")
        let validData = _.pick(data, columns);
        let query = Library.queryObjectToQuery(this.sql.insert(this.tableName, validData));
        return await this.db.create(query);
    }

    async read(conditions) {
        conditions = conditions ?? ""
        let query = Library.queryObjectToQuery(this.sql.select(this.tableName, this.columns).where(conditions));
        return await this.db.read(query)
    }

    async update(data, id) {
        let columns = _.without(this.columns, "proxyId")
        let validData = _.pick(data, columns);
        let query = Library.queryObjectToQuery(this.sql.update(this.tableName, validData).where({ proxyId: id }))
        return await this.db.update(query);
    }

    async delete(id) {
        let query = Library.queryObjectToQuery(this.sql.deletes(this.tableName).where( {proxyId: id}))
        return await this.db.delete(query);
    }
}