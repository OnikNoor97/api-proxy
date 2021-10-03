module.exports = class Library {
    static queryObjectToQuery(queryObj) {
        if (queryObj.values.length == 0) return queryObj.text.replace("WHERE", "");

        let query = queryObj.text;

        for(let i = 0; i < queryObj.values.length; i++) {
            if (typeof queryObj.values[i] === 'object') {
                // Replace object into string
                queryObj.values[i] = JSON.stringify(queryObj.values[i])

                // Escapes String to ensure no JSON Serialisation issues
                queryObj.values[i] = queryObj.values[i].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
            }
            query = query.replace(`$${i+1}`.trim(), `'${queryObj.values[i]}'`);
        }
        return query;
    }
}