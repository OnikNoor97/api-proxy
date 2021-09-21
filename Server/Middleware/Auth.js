const AuthController = require("../Controller/AuthController")

module.exports = class Auth 
{
    static async authMiddleware(req, res, next)
    {
        var ip = req.header("CF-Connecting-IP");

        if(await AuthController.checkIPAddress(ip) == 0)
        {
            res.status(401).json(); return;
        }

        next();
    }
}