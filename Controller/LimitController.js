const { limiter, authSpeedLimiter } = require("../Auth");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

class LimitController
{
    static getRateLimit()
    {
        return rateLimit({
            windowMs: 10 * 60 * 1000,
            max: 200,
            keyGenerator: (req) => { return req.header("CF-Connecting-IP"); },
            handler: (req, res) => res.status(429).json({ Message: "Too Many Requests!" })
        });   
    }
    
    static getAuthSpeedLimiter()
    {
        return slowDown({
            windowMs: 30 * 60 * 1000,
            delayAfter: 10,
            delayMs: 1000,
            skipSuccessfulRequests: true,
            keyGenerator: (req) => { return req.header("CF-Connecting-IP"); }
        });
    }
}

module.exports = LimitController;