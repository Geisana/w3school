var  http = require ('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// Nesse codigo acessar localhost:8080/nomequedesejar 
// o codigo le a string de consulta e exibe na tela