//connecting mysql
var mysql = require("mysql"); 


var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "Getlean6*",
database: "burgers_db"
});

//this is where the connection to the mysql database and server happens
connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
return;
}
console.log("connected as id " + connection.threadId);
});

//connection.connect(function(err) {
//if (err) throw err;
//console.log("connected as id " + connection.threadId);
//start();
//});

//connection fot orm for exporting...
module.exports = connection;