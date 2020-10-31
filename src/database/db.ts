const knex = require('knex');
const path1 = require('path');

const db_declarate = knex({
    client: "sqlite3",
    connection: {
        filename: path1.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

module.exports = db_declarate;