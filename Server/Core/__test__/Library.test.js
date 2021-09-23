const library = require('../Library');
const sql = require('sql-query-generator');

test('SELECT SQL query with single column without conditions', () => {
    expect(
        library.queryObjectToQuery(sql.select("table", ["column1"]).where({}))
        ).toMatch("SELECT column1 FROM table");
})

test('SELECT SQL query with multiple column without conditions', () => {
    expect(
        library.queryObjectToQuery(sql.select("table", ["column1", "column2"]).where({}))
        ).toMatch("SELECT column1, column2 FROM table");
})

test('SELECT SQL query with single column with one condition', () => {
    expect(
        library.queryObjectToQuery(sql.select("table", ["column1"]).where({ "column1" : "value1" }))
        ).toMatch("SELECT column1 FROM table WHERE column1 = 'value1'");
})

test('SELECT SQL query with multiple column with one condition', () => {
    expect(
        library.queryObjectToQuery(sql.select("table", ["column1", "column2"]).where({ "column1" : "value1" }))
        ).toMatch("SELECT column1, column2 FROM table WHERE column1 = 'value1'");
})

test('SELECT SQL query with single column with multiple conditions', () => {
    expect(
        library.queryObjectToQuery(sql.select("table", ["column1"]).where({ "column1" : "value1", "column2" : "value2" }))
        ).toMatch("SELECT column1 FROM table WHERE (column1 = 'value1' AND column2 = 'value2')");
})

test('SELECT SQL query with multiple column with multiple conditions', () => {
    expect(
        library.queryObjectToQuery(sql.select("table", ["column1", "column2"]).where({ "column1" : "value1", "column2" : "value2" }))
        ).toMatch("SELECT column1, column2 FROM table WHERE (column1 = 'value1' AND column2 = 'value2')");
})