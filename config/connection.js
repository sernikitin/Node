
var mysql = require('mysql')
var connection;

if(process.env.JAWSDB_URL){
    connection= mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        hostname:'localhost',
        user: 'root',
        database:'TESTING1'
    })
};
connection.connect();
module.exports = connection;