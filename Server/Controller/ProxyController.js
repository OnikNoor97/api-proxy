const axios = require('axios');
const APIError = require('../Core/APIError');
const proxyDto = require('../Dto/ProxyDto');

module.exports = class ProxyController {
    static async createProxy(req, res, next) {
        return next(APIError.badRequest("To be implemented"))
    }

    static async readProxy(req, res, next) {
        let proxyDetails = await new proxyDto().read();
        return res.status(200).json(proxyDetails);
    }

    static async updateProxy(req, res, next) {
        return next(APIError.badRequest("To be implemented"))
    }

    static async deleteProxy(req, res, next) {
        return next(APIError.badRequest("To be implemented"))
    }

    static async applyProxy(req, res, next) {
        let endpoint = req.params.endpoint;
        if (endpoint == null) return next(APIError.badRequest("No URL has been used"));

        let proxySettings = await new proxyDto().read({ proxyUrl: endpoint })
        if (proxySettings.length == 0) return next(APIError.badRequest("URL does not exist"))

        res.status(200).json({ Message: "Content Recieved"});

        await axios({
            method: req.method,
            url: `http://${proxySettings[0].proxyIp}:${proxySettings[0].proxyPort}/${proxySettings[0].proxyUrl}`,
            data: req.data
        })
    }
}