var fs = require ('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err; // se o arquivo nao existir, o arquivo será criado
    console.log('Salvo!');

});