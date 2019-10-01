console.log("Hello Node");

// const fs = require('fs');
// fs.appendFile('message.txt','Hello Node.js', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

const fs = require('fs');
const os = require('os');
const note = require('./note.js')

var res = note.addNode();
console.log(res);

var result =note.add(9,-3);
console.log(result);

// var user = os.userInfo();
// console.log('user.username');

// fs.appendFileSync('message.txt', `Hello ${user.username}, you are ${note.age}, you are studying${note.study}`);
