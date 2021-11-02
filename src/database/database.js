const databaseInfo = require('./database.info')
const mysql = require('mysql')

const connection = mysql.createConnection( databaseInfo )

module.exports = connection
