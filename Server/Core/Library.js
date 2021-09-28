module.exports = class Library {
    static queryObjectToQuery(queryObj) {
        if (queryObj.values.length == 0) return queryObj.text.replace("WHERE", "");

        let query = queryObj.text;

        for(let i = 0; i < queryObj.values.length; i++) {
            query = query.replace(`$${i+1}`.trim(), `'${queryObj.values[i]}'`);
        }
        return query;
    }
}
