var url = require ('url'); 

var endereco = 'http://localhost:8080/default.html?year=2022&mounth=Novembro'

var q = url.parse(endereco, true);

console.log(q.host); // retorna a porta alocada

console.log(q.pathname); // retorna caminho do nome 'default.html'

console.log(q.search);

var qdata = q.query ; // retorna um objeto: {ano: 2022 mes Novembro}

console.log(qdata.month); //retorna mes Novembro

