const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'nettikayttaja',
  password: 'netti',
  database: 'netdb'
});
module.exports = connection;