var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senhabd"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Conectado");
    con.query("CREATE DATABASE mydb", function (err, result){
        if (err) throw err;
        console.log("Base de dados criada");
    });
});