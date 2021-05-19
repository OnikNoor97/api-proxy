const { uuid } = require('uuidv4');
const dbController = require("./DatabaseController")
let db = new dbController("wsAuth");

class WsAuthController
{
    static async CreateSession()
    {
        let token = uuid();
        let query = "INSERT INTO session (sessionToken, allowedAccess) VALUES (?, ?)"
        await db.InsertUpdateQuery(query, [token, 0]);
        return token;
    }

    static async AllowAccessSession(uuid)
    {
        var query = "UPDATE session SET allowedAccess = 1 WHERE sessionToken = ?"
        var parameter = [uuid];
        let result = await db.InsertUpdateQuery(query, parameter);
        return result == 1 ? true : false;
    }
}

module.exports = WsAuthController;