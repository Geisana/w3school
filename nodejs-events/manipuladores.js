// Atribuir manipuladores de eventos a seus proprios eventos com o objeto EventEmitter
//para disparar o evento use o emite()

var events = require('events');
var EventEmitter = new events.EventEmitter();

//Criar manipulador de eventos
var myEventHandler = function () {
    console.log('Eu ouço um grito ');
}
// atribuir o manipulador de eventos a um evento
EventEmitter.on('grito', myEventHandler)

// Dispara o evento 'grito'
EventEmitter.emit('grito');
