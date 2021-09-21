const Log = require("../Model/Log")

module.exports = class LogController {
    async readLog(req) {
        let l = new Log();
        return await l.read();
    }
}
