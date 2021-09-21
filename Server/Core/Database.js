const mysql = require('mysql2');

module.exports = class Database {
    constructor(server, username, password, table) {
        this.server = server;
        this.username = username;
        this.password = password;
        this.table = table;
    }

    async create(sql) {
        const pool = mysql.createConnection({ host: this.server, user: this.username, password: this.password, database: this.table });
        const promisePool = pool.promise();
        let [rows] = await promisePool.execute(sql);
        pool.end();
    
        return rows.affectedRows;
    }

    async read(sql) {
        const pool = mysql.createConnection({ host: this.server, user: this.username, password: this.password, database: this.table });
        const promisePool = await pool.promise();
        let [rows] = await promisePool.execute(sql);
        pool.end();
    
        return rows;
    }

    async update(sql) {
        const pool = mysql.createConnection({ host: this.server, user: this.username, password: this.password, database: this.table });
        const promisePool = pool.promise();
        let [rows] = await promisePool.execute(sql);
        pool.end();
    
        return rows.changedRows;
    }

    async delete(sql) {
        const pool = mysql.createConnection({ host: this.server, user: this.username, password: this.password, database: this.table });
        const promisePool = pool.promise();
        let [rows] = await promisePool.execute(sql);
        pool.end();
    
        return rows.changedRows;
    }
}
