const LogDto = require("../Dto/LogDto")

module.exports = class LogController {

    static async createLog(req, res, next) {
        let values = {
            method: req.method,
            hostname: req.hostname,
            sourceIP: req.headers["CF-Connecting-IP"] ?? req.ip,
            url: req.baseUrl,
            headers: req.headers,
            queryParams: req.query,
            body: req.body,
        }

        await new LogDto().create(values)
        return next();
    }
    static async readLog(req, res, next) {
        let results = await new LogDto().read(req.query);
        res.status(200).json(results);
    }
}
