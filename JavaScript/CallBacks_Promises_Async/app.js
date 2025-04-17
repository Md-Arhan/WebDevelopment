//Function calls

// function hello(){
//     console.log("Hello");
// }

// function demo(){
//     console.log("calling hello function")
//     hello();
// }

// console.log("calling demo function");
// demo();
// console.log("done with calling")



//Visualization the call stack

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();



//call backs

// setTimeout(() => {
//     console.log("arhan");
// }, 2000);

// console.log("hii"); 




//callback hell

// h1 = document.querySelector("h1");  //global varible

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//     }, delay);
//     // h1.style.color = color;
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () =>{
//         changeColor("green", 1000 , () =>{
//             changeColor("blue", 1000)
//         });
//     });
// });


//Not a good Practice
// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("red", 3000);


//This wont works, only functions and arrow function can be handled for delay, when we executes this the function will direrctly executes the result is undefined
// setTimeout(changeColor("red"), 1000);
// setTimeout(changeColor("green"), 2000);

// setTimeout(() => {
//     h1.style.color = "orange"
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "red"
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green"
// }, 3000);



//call back hell

// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if(internetSpeed > 4){
//         console.log("your data is saved");
//         success();
//     }else{
//         console.log("weak connection can't store the data");
//         failure();
//     }
// }

// savetoDb("data", () => {
//     console.log("success : your data saved successfully");
//     savetoDb("data2", () => {
//         console.log("data saved");
//     }, () => {
//         console.log("weak connnection");
//     })
// },
//  () => {
//     console.log("failure : weak connection ");
// });



//Promise -> object

// function savetoDb(data){
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10) + 1;
//         if(internetSpeed > 4){
//             resolve("succes : data is saved");
//         }else{
//             reject(" failure : weak connection");
//         }
//     });  
// }

// // let res = savetoDb('arhan');

// savetoDb("arhan").then(() =>{
//     console.log("promise resolved");
//     // console.log(res);
// }).catch(() => {
//     console.log("promise rejected");
//     // console.log(res);
// })



//promise chaining

// function savetoDb(data){
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10) + 1;
//         if(internetSpeed > 4){
//             resolve("succes : data is saved");
//         }else{
//             reject(" failure : weak connection");
//         }
//     });  
// }


// savetoDb("arhan").then(() =>{
//     console.log("promise resolved");
//     savetoDb("hello word")
//     .then(() => {
//         console.log("data2 stored")
//     })
// }).catch(() => {
//     console.log("promise rejected");

// })

// savetoDb("arhan").then(() =>{
//     console.log("data1 saved");
//     return savetoDb("hello word")
// })
// .then(() => {
//     console.log("data2 saved");
//     return savetoDb("hii");
// })
// .then(() => {
//     console.log("data3 saved")
// })
// .catch(() => {
//     console.log("promise rejected");

// })

// savetoDb("arhan").then((result) =>{
//     console.log("data1 saved");
//     console.log("result of promises : ", result);
//     return savetoDb("hello word")
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log( "result of promises : ", result);
//     return savetoDb("hii");
// })
// .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promises : ", result);
// })
// .catch((error) => {
//     console.log("promise rejected");
//     console.log("result of promises : ", error);

// })



// h1 = document.querySelector("h1");  //global varible

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("seccess")
//         }, delay);
//     })
// }

// changeColor("red", 1000).then((res) => {
//     console.log("changed")
//     return changeColor("orange", 1000);
// }).then((res) =>{
//     console.log("changed2");
// }).catch((err) =>{
//     console.log(err);
// })




//Async and await

// async function greet(){
//     throw "some random error"  //reject
//     return "hello";
// }

// greet().then((res) => { 
//     console.log("promise was resolved");
//     console.log(res);
// }).catch((e) => {
//     console.log(e)
// });


// function getNumber(){
//     return new Promise((resolve, rejeted) => {
//         setTimeout(() => {
//         let num = Math.floor(Math.random() *10) +1;
//         console.log(num);
//         resolve();
//         }, 1000);
//     })

// }

// async function dem(){
//     await getNumber();
//     await getNumber();
//     await getNumber();
//     await getNumber();

// }


// h1 = document.querySelector("h1");  //global varible

// async function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random() * 5) +1;
//         if(num > 3){
//             reject("promise rejected")
//         }
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("seccess")
//         }, delay);
//     }) 
// }


// async function change(){
//     try {
//       await changeColor("green", 1000);
//       await changeColor("yellow", 1000);
//       await changeColor("red", 1000);
//     } catch (error) {
//         console.log("error caught");
//         console.log(error);
//     }
//     let a = 5;
//     console.log(a);
// }

