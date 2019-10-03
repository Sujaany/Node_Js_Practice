// function sayHello(name){
//     console.log('Hello'+ name);
// }

// sayHello('Sujaany');

// console.log(module);

// const log = require('./logger');

// log('messsage');

// Path Module
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS_MODULE
// const os = require('os');
// var totalMemory =os.totalmem();
// var freeMemory =os.freemem();
// console.log(`Total Memory:' + ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// FS_MODULE
// const fs = require('fs');
// fs.readdir('$',function(err,files){
//     if(err) console.log('Error',err);
//     else console.log('Result',files);
// });

// EVENT_MODULE
// const EventEmitter = require ('events');
// const emitter = new EventEmitter();
// Register a listener
// emitter.on('messageLogged',function(){
//     console.log('Listener called');
// });
// raise an evevnt
// emitter.emit('messageLogged');

// EVENT_ARGUMENTS
// const EventEmitter = require ('events');
// const emitter = new EventEmitter();
// Register a listener
// emitter.on('messageLogged',(arg) =>{
//     console.log('Listener called',arg);
// });
// raise an evevnt
// emitter.emit('messageLogged',{id:1,url:'http://'});
//Raise: logging (data:message)

// EXTENDING_EVENT_EMMITER
// const EventEmitter = require ('events');
// const emitter =new EventEmitter();

// emitter.on('messageLogged',(arg) =>{
//     console.log('Listener called',arg);
// });

// logger.log('message');

