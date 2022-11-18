const { Client } = require('pg')
const client = new Client({
    user: 'projectholis',
    host: 'postgresql-projectholis.alwaysdata.net',
    database: 'projectholis_db',
    password: 'root123!',
})


module.exports = client;

