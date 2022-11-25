var fs = require ('fs');

fs.writeFile('mynewfile3.txt', 'w', function (err, file){
    if (err) throw err; 
    console.log('Arquivo salvo substituido');

});