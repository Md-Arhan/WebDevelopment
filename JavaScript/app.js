console.log("Hello World");
// console.log("Java Script");
// let a = 10;
// let b = 12;
// let sum = `The Final Price is ${a * b} rupees`;
// console.log(sum);
// console.log(a + b);

// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(++a);

// console.log(a>18);
// console.log(a<18);
// console.log(10<=10);
// console.log(a);
// console.log(5!=5);

// console.log(5==5)
// console.log(55 == '55');  //true
// console.log(0==' ');  //true
// console.log(0 == false); //true
// console.log(null == undefined); //true

// console.log(5===5)  //true
// console.log(55 === '555'); //false
// console.log(0===' ');  //false
// console.log(0 === false); //false
// console.log(null === undefined); //false

// if(false || 1){
//     console.log("it has true value");
// }else{
//     console.log("it has false value");
// }




// let color = "blue";

// switch (color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("Slow down");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Broken Light");
// }



// alert("Something went wrong");
// console.log("this is an simple log")
// console.error("this is an error");
// console.warn("this is an warning message");


// let firstName = prompt("please enter your name");
// console.log(firstName);

// let msg = "   hello  ";
// msg.trim();


//String Methods
// let name = "ILoveCoding


//Arrays (Data Structure)
// let arr = ["arhan", "hkbk", "college"];

// //Arrays Methods
// let cars = ["audi", "bmw", "maruti"];


//For Loop
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// for(let i=1; i<=5; i++){
//     console.log(i)
// }

// for(let i=5; i>=0; i=i-3){
//     console.log(i);
// }


//Favoutite Movie
// const favMovie = "avatar";

// let guess = prompt("Guess my favourite movie");

// while(guess!=favMovie && guess!="quit"){
//     guess = prompt("wrong guess, please try again");
// }

// if(guess == favMovie){
//     alert("You won!");
// }else{
//     alert("You quit")
// }


//Loops in Arrays

// let fruits = ["Mango", "apple", "banana", "litchi"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]); 
// }

// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder man", "flash"]
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[0].length; j++){
//         console.log(`j = ${i}, ${heroes[i][j]}`);
//     }
// }


// //for of loop

// for(char of "arhan"){
//     console.log(char);
// }

// for(list of heroes){
//     console.log(list);
//     for(list1 of list){
//         console.log(list1); 
//     }
// }


//to do app

// let todo = [];

// let req = prompt("Enter the request");

// while(true){

//     if(req == "quit"){
//        console.log("quited");
//        break;
//     }

//     if(req == "list"){
//         console.log("----------");
//         for(task of todo){
//             console.log(task);
//         }
//     }else if(req == "add"){
//         let task = prompt("please enter the task u want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete"){
//         let task = prompt("please enter the task u want to delete");
//         todo.splice(task, 1);
//     }else{

//             console.log("Wrong req");
//     }
// }



//JS Objects Literals

// const student = {
//     name : "arhan",
//     age : 21,
//     marks : 94,
//     city : "Bangalore"
// }

// let strudent2 = ["arhan", 23, 94];
// console.log(strudent2)

// console.log(student.name);


// const student = {
//     1 : "arhan",
//     null : 21,
//     true : 94,
//     const : "Bangalore"
// }


// const student = {
//     name : "arhan",
//     age : 21,
//     marks : 94,
//     city : "Bangalore"
// }

// student.city = "Mumbai";
// student.age = 23;
// student.gender = "Male"
// student.marks = "A";
// student.marks = [20, 65];

// delete student.marks;


//Objects of objects

// const classInfo = {
//     arhan:{
//         grade: "A+",
//         city : "delhi"
//     },
//     ur:{
//         grade: "A",
//         city : "Pune"
//     },
//     rehman:{
//         grade: "0",
//         city : "Mumbai"
//     }
// };

// const classInfo = [
//     {
//         name:"arhan",
//         grade : "A",
//         city: "bangalore"
//     },
//     {
//         name:"Ur",
//         grade : "A+",
//         city: "Mumbai"
//     }
// ]



//Math Properties and Methods

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.pow(5, 2));
// console.log(Math.floor(5.99999999));   //round off 5
// console.log(Math.ceil(5.999999));   //larger round off 6
// console.log(Math.random(10));   //random value

 
// let step1 = Math.random();
// let step2 = step1 = step1 * 10;
// let step3 = Math.floor(step2);

// let random = Math.floor(Math.random()*10)+1;
// let random1 = Math.floor(Math.random()*10)+20;  //21 22 23 24 25;


//Practice

// const max = prompt("Guess the max number");

// let random = Math.floor(Math.random() * max) +1;

// let guess = prompt("guess the number")

// while(true){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }

//     if(guess == random){
//         console.log("you are right");
//         break;
//     }else if(guess < random){
//         guess = prompt("your guess was to small. please try again");
//     }else{
//         guess = prompt("your guess was to large. please try again");
//     }
// }



//Function Calling 

// function hello(){
//     console.log("hello");
// }

// function printName(){
//     console.log("Arhan");
// }

// hello();
// printName();

// function printInfo(name, age){
//     console.log(name);
//     console.log(age);
// }

// printInfo("arhan", 21);
// printInfo("umair", 21);


// function table(n){
//     for(let i=n; i<=n*10; i=i+n){
//         console.log(i);
//     }
// }

// table(52 );


// //Arguments and return keyword

// function sum(a, b){
//     return a+b;
// }

// let s = sum(1, 2);
// console.log(s);
// s = sum(sum(2, 5), 4);
// console.log(s);


//Extra knowledge from Chartgpt

// function greet() {
//     console.log("Hello from greet");
//     return "👋";
// }

// const arr = [
//     greet(),                    // ← function gets called immediately
//     (() => "Arrow called")(),   // ← arrow function gets called
//     42
// ];

// console.log(arr); // [ '👋', 'Arrow called', 42 ]


// const operations = [
//     (a, b) => a + b,
//     (a, b) => a - b,
//     (a, b) => a * b
// ];

// console.log(operations[0](5, 3)); // 8
// console.log(operations[1](5, 3)); // 2
// console.log(operations[2](5, 3)); // 15


// const actions = [
//     () => console.log("Hello!"),
//     () => console.log("Welcome!"),
//     () => console.log("Goodbye!")
// ];

// actions.forEach(fn => fn()); // Calls all 3 functions


//Scope

//function scope

// let sums = 54; //Global scope

// function sum(a, b){
//     let sums = a+b;   //specific function scope
// }

// sum(5, 2);

// console.log(sums);

// //block scope
// {
//     let a = 5;
//     const b = 6;
//     var c = 1;
// }

// console.log(a);
// console.log(b);
// console.log(c); // only this works

// //lexical scope

// function outerfunc(){
//     let x = 10;
//     let y = 50;

//     function innerfunc(x){  //scope only in function
//         let a = 10;
//         console.log(x);  //lexical scope
//     }
    
//     console.log(a);
//     innerfunc();
// }

// outerfunc()


//Function expression

// const sum = function(a,b){
//     return a+b;
// }

// console.log(sum(10, 5))



//Higeher Order funxtion


// let greet = function(){
//     console.log("hello");
// }

// function mutipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// mutipleGreet(greet, 5);
// mutipleGreet(function(){ console.log("hi")}, 12);


// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
    
//     if(request == "even"){
//         return function(n){
//             console.log((n%2 == 0));
//         }
//     }
// }

// let request = "odd";

// let func = oddEvenTest(request);
// func(3);



//Methods

// const calculator = {
//     add: function(a, b){
//         return a+b;
//     }, 
//     sub:function(a, b){
//         return a-b;
//     }
// }

// console.log(calculator.add(10, 22));  //onjects & method
// console.log(calculator)


//this keyword

// const student = {
//     name: "arhan", 
//     age: 21,
//     eng: 93, 
//     math :91, 
//     phy: 94,
//     getAvg(){
//         console.log(this)
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg)
//     }
// }

// function getAvg(){
//     console.log(this);
// }

// getAvg();



//try & catch4

// let a=10;

// try {
//     console.log(a);
// } catch (error) {
//     console.error("statement is not defined");
//     console.log(error)
// }



//Arrow function

// const sum = (a, b) => {
//     console.log(a+b);
// }

// const cube = (n) =>{
//     console.log(n*n*n);
// }

// let c = cube(3);


// //a**b
// const pow = (a, b) => {
//     return a**b;
// }

// const a = () =>{
//     console.log("hii")
// }


// //implicit return

// const mul = (a, b) => (a*b);
// console.log(mul(10, 20))


//setTimeOut:

// console.log("Hi there");

// setTimeout( () =>{
//     console.log("arhan");
// }, 4000);

// console.log("welcome to")


//setInterval 

// let id = setInterval(() => {
//     console.log(1);
// }, 2000);

// let id1 = setInterval(() => {
//     console.log("hii");
// }, 2000);

// clearInterval(id);


//this with Arrow Functions

// const student = {
//     name: "arhan", 
//     marks: 89,
//     prop: this, //global scope, gflobal object window
//     getName: function(){
//         console.log(this); //student object;
//         return this.name;
//     },
//     getMarks: () => {
//       console.log(this);  //parent scope -> window, for this function the parent is global 
//       return this.marks;
//     }, 

//     getInfo: function() {
//         setTimeout(() => {   //parent object is this (getInfo), getInfo parent is student object, evene here it is called by the window obk=ject but hthe arrow function checks which was there parent scope
//             console.log(this); //student object;
//         }, 2000);
//     }, 
//     getInfo2:(function() {
//         setTimeout(function () {
//             console.log(this); //window object, who called the setTimeOut the set timeout is called by the winodw object
//         }, 2000);
//     })
// }

// const a = 4; //global scope



// const id = setInterval(() => {
//     console.log("hii");
// }, 2);

// setTimeout(() => {
//    clearInterval(id);
// }, 10000);



//Assignment 

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//       console.log(this.message);
//     }
//   };

//   /*When you pass object.logMessage directly to setTimeout, it loses its context (this). Inside setTimeout, the function is just a reference, and when called, this doesn't refer to object anymore—it defaults to the global object (window in browsers), where message is not defined. */
  
//   setTimeout(object.logMessage, 1000);


//   //When callback() is invoked inside method, it's not bound to any object, so this inside callback refers to the global object (window in browsers), and window.length is typically 0 (or might vary depending on the context), but in strict mode it would be undefined.

//   const object = {
//     length: 5,
//     method(callback) {
//       callback();
//     },
//   };
  
//   function callback() {
//     console.log(this.length);
//   }
  
//   object.method(callback, 1, 2);



//Arrays Methods

//forEach

// let arr = [1, 2, 3, 4, 5, 6];

// let prin = function(el){
//     console.log(el);
// }

// arr.forEach(prin);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el) => {
//     console.log(el)
// })



// let arr = [
//     {
//         name:"arhan",
//         age: 13,
//     },
//     {
//         name:"ur",
//         age: 16,
//     },
//     {
//         name:"rehmna",
//         age: 12,
//     }
// ]

// let a = arr.forEach( (student) => {
//     return student.marks
// });


//Mapping

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el*2;
// });

// let marks = arr.map((el) =>{
//     return el.age *2;
// })


//filter

// let nums = [1, 2, 3, 4,5, 6, 7, 8, 9];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;
// })// even -> true, odd -> false;


//every and some

// let nums = [1, 2, 4];
// let res = nums.every((el) => {
//     return el%2==0;
// })

// let res1 = nums.some((el) => {
//     return el%2==0;
// })


//reduce

// let num = [1, 2, 3, 4];
// let res = num.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// })



//Maximum array

// let arr = [1, 5, 6, 7, 2 ,6, 9, 1 ,2, 3];

// let max = arr.reduce((max, el) => {
//    if(max < el){
//     return el;
//    }else{
//     return max;
//    }
// });

// console.log(max);


//practice 

// function getNumber(nums){
//     let ans = nums.every((el) => {
//         return el%10 == 0;
//     })

//     return ans;
// }

// let nums = [10, 20, 30, 40];

// let a = getNumber(nums);




//default parameter

// function sum(a, b=2){
//     return a+b;
// }

// function sum1(a=5, b){
//     return a+b;
// }

// sum2(3) // a = 3, b is undefined

// sum(2); 

 

//Spread

// let arr = [1, 2, 3, 4, 5];
// let min = Math.min(...arr);
// console.log(min);
// console.log(...arr);

// let a = "arhan"
// console.log(...a);


// //Array literals

// let newArr = [...arr];
// console.log(...arr);
// newArr.push(10);
// console.log(...newArr, ...a);


//object Literals

// let data = {
//     email : "arhan@gmail.com",
//     password: "abcd",
// };

// let dataCopy = {...data, id: 123};


// let arr = [1, 2, 3, 4, 5];  // val
// let obj1 = {...arr}; //obj -> key : val  //its takes the indexes as key and value as value



//Rest

// function sum(...args){  //arguments
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us", args[i]);
//     }
    
// }

// sum(1, 2, 3, 4, 5, 6, 4, 8, 89, 4, 4, );


// function min(a, b, c, d){
//     console.log(arguments);
// }

// min(1, 2, 3, 4);  //No erroe for every function the arguments are store in the collection of (arguments) which we can use, even if we dont give arguments the output generates, we cannot push or modify its not an array its an arguments


// function min(msg, ...args) {
//     return args.reduce((min, ele) => {
//         console.log(msg);
//         if(min > ele){
//             return ele;
//         }else{
//             return min;
//         }

//     })
// }



//Destructuring

let names = ["tony", "bruce", "peter", "steve", "s", "r"];
let [winner, runnerup, secondRunnerUp, ...others] = names;

//objects

const strudent = {
    name: "karan", 
    age: 14, 
    class:9,
    subjects: ["hindi", "english", "maths"], 
    username: "karan@123", 
    password: "abcd",
    city: "pune",
}

// let username = strudent.username;
// let password = strudent.password;

// let {username, password} = strudent;  //matches with the keys of object by names
let {username : user, password: secret, city: place = "Mumbai"} = strudent;
console.log(user);
console.log(secret);
// console.log(city)  //first undefined, it will be pune bcz high order precedence is object
console.log(place);