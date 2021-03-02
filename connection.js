
// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {

connection = mysql.createConnection({
  
  port: 3306,
  host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "g7uq453sfl6i4cwm",
  password: "hsyzp5mryjfu5dm9",
  database: "qhuf0758xcobjp13"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
