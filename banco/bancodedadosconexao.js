var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senhabd",
  insecureAuth : true
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Tive que vasculhar para fazer isso funcionar, o site do w3  esta desatualizado :(");
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  
});

