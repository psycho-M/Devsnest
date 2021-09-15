// var fs = require('fs');
// fs.mkdirSync('day_1');
// fs.writeFileSync('day_1/hello.txt', 'Hello World!');/
// fs.appendFileSync('day_1/hello.txt', ' appended');


var Test = require('./require_test');

var obj = new Test();
var returnValue = obj.print();
console.log(obj);
console.log(returnValue);