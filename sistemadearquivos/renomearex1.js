var fs = require ('fs');

fs.rename('mynewfile1.txt', 'meuarquivorenomeado.txt', function (err){
    if (err) throw err;
    console.log('Arquivo renomeado');
});