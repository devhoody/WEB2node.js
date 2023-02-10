var fs = require('fs');

/*
//동기적 readfilesync
console.log('a')
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result)
console.log('c')
*/

console.log('a');
fs.readFile('syntax/sync.js', 'utf8', function(err, result) {
    console.log(result);
});
console.log('c');