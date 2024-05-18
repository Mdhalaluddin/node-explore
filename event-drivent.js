const EventEmitter = require("events");

const myEvent = new EventEmitter();

//first listener

myEvent.on('Birthday', function(){
    console.log(`Happy Birthday To You`);
});

myEvent.on('Birthday', function(gift){
    console.log(`You can give me a ${gift}`);
} )

// console.log(myEvent.listeners('Birthday'));

myEvent.emit('Birthday', 'bike')



