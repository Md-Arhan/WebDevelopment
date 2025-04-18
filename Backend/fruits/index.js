const apple = require('./apple');
const mango = require('./mango');
const orange = require('./orange');

let fruits = [apple , mango, orange];
// let fruits = {
//     a : apple,
//     m : mango, 
//     o: orange
// }

module.exports = fruits;


/*  You're getting into some clean modular structuring now. Let me explain why we can’t directly pass a folder's contents as an array or object automatically — and also how to do it cleanly 

 Because:
Node.js doesn't automatically read every file inside a folder unless you write logic to do it.

A folder isn’t a value by itself — it's a container. You need to manually load what’s inside (require each file or read the directory).

Yes, index.js is the default file that gets picked up automatically when you import a folder!
you can pass all data from a folder dynamically!
*/