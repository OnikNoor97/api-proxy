const Database = require("./DatabaseController");
const db = new Database();

module.exports = class AuthController 
{
    static async checkClientId(clientId)
    {
        var sql = "SELECT clientId FROM client WHERE clientId = ?";
        var parameters = [clientId];

        return db.getLength(sql, parameters);
    }

    static async updateIpAddress(ip, clientId)
    {
        var sql = "UPDATE client SET ipAddress = ? WHERE clientId = ?";
        var parameters = [ip, clientId];

        return db.getUpdatedRows(sql, parameters);
    } 
    
    static async checkIPAddress(ip)
    {
        var sql = "SELECT ipAddress FROM client WHERE ipAddress = ?";
        var parameters = [ip];

        return db.getLength(sql, parameters);
    }
}