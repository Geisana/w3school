var http = require('http'); 
var dt = require('./modulodata');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Data: " + dt.datadehoje());
    res.end();
}).listen(8080);