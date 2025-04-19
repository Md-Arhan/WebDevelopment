// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello", i);
// }

// console.log("bye");

// console.log(process.argv);


//process .argv
// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("hello & welcome to args of", args[i]);
// }





//moulde.export
//require files

// const someValue = require("./math");
// console.log(someValue);

// const math = require("./math");


// console.log(math);
// console.log(math.sum);
// console.log(math.PI);

// for(let key in math){
//     if (typeof math[key] === "function") {
//         console.log(`${key}:`, math[key](2, 3));  // Pass 2, 3 as example args
//     } else {
//         console.log(`${key}:`, math[key]);
//     }
// }




//require directory

// const info = require("./fruits");

// console.log(info.a);
// console.log(ingo[0]);




const figlet = require('figlet');

figlet("Arhan!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });