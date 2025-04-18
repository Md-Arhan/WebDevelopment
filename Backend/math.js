// const sum = (a, b) => a +b;

// const mul = (a, b) => a*b;

// const g = 9.5;
// const PI = 3.14

// // module.exports  = 123;

// let obj = {
//     sum : sum, 
//     mul : mul,
//     g : g, 
//     PI : PI,
// }

// module.exports = obj;


//shorts forms

module.exports = {
        sum : sum, 
        mul : mul,
        g : g, 
        PI : PI,
}

module.exports.sum = (a, b) => a+b;
exports.mul = (a, b) => a*b;

exports = 5;  //js takes as normal varibale, for var we use module.exports, for exports it treted as module when we use for objects in objects properties and method


/*array cant pass the methods

Exactly — you're catching on! Let's unpack why arrays can't directly hold named methods like objects do, and what that really means. 

module.exports = [
    function sum(a, b) { return a + b },
    function multiply(a, b) { return a * b }
];

const math = require('./math');
console.log(math[0](2, 3)); // sum → 5
console.log(math[1](2, 3)); // multiply → 6
But that's not readable or scalable. You're relying on the position (index) of each method.
*/