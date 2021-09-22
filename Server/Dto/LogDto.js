const BaseDto = require("./BaseDto");

module.exports = class LogDto extends BaseDto {
    constructor() {
        super();
        this.columns = ["LogId", "sourceIP", "destinationIP", "url", "headers", "body"];
        return this;
    }

    async read(conditions) {
        let query = (arguments.length == 0)
        ? this.sql.select("Log", this.columns).text
        : this.sql.select("Log", this.columns).where(conditions).text;
        
        return await this.db.read(query) 
    }
}