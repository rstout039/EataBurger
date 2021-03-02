
// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {

connection = mysql.createConnection({
  
  port: 3306,
  host: "fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/",
  user: "bc668ui99tx56345",
  password: "b5t7oxuh2sdv1aj5",
  database: "c60rd72sam5w1kxp"
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
