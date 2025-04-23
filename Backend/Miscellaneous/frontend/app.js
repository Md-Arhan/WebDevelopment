//Inefficient way

// const stud1 ={
//     name : "adam",
//     age: 25,
//     marks : 95,
//     getMarks : function () {
//         return this.marks;
//     }
// }

// const stud2 ={
//     name : "adams",
//     age: 25,
//     marks : 99,
//     getMarks : function () {
//         return this.marks;
//     }
// }

// const stud3 ={
//     name : "adamss",
//     age: 25,
//     marks : 98,
//     getMarks : function () {
//         return this.marks;
//     }
// }


//prototye

// let arr = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr.sayhello = () =>{
//     console.log("hello")
// }

// arr2.sayhello = () =>{
//     console.log("hello in arr")
// }

// arr.sayhello() === arr2.sayhello(); // false
// "abc".toUpperCase === "xyz".toUpperCase //true

// arr.__proto__.push = (n) => {console.log(n)}
// arr.push(3);

// //actual proto fxn add the values, it only prints the value



//Factory Function 

// function PersonMaker(name, age){  //making so we called factory function
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log("Hi is my name is " + this.name);
//         }
//     }

//     return person;
// }

// let p1 = PersonMaker("arhan", 10);  //copy
// console.log(p1.talk());
// let p2 = PersonMaker("rehman", 23); //copy
// console.log(p2.talk());
// console.log(p1.talk === p2.talk);




//new Operator

//Constructors - doesnt return anything & start with capital letter, as a good programmer
// function Person(name, age){  //making so we called factory function
//         this.name = name;
//         this.age = age;
//          console.log(this); //this will be Person not window object
// }

// Person.prototype.talk = function (){
//  console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("arhan", 25);
// let p2 = new Person("rehman", 25);




//Classes

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }

//     walk(){
//         console.log("walk")
//     }
// }

// const p1 = new Person("arhan", 10);
// const p2 = new Person("rehman", 23) 
// console.log(p1.talk === p2.talk);



//Inheritance

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
                console.log(`Hi iam ${this.name}`)
            }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name , age, sub) {
        super(name, age);
        this.sub = sub;
    }

    // @override, when we have same method then the child class method is greater than the parent class, implementation of child is uses
    talk(){
        console.log("teach talk about subject");
    }

}

// class Student {
//     constructor(name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     talk(){
//         console.log(`Hi iam ${this.name}`)
//     }
// }

// //Repetations

// class Teacher {
//     constructor(name, age, subject){
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }

//     talk(){
//         console.log(`Hi iam ${this.name}`)
//     }
// }

let stu = new Student("arhan", 21, 99);
let tea = new Teacher("arhan", 23, "DSA");
stu.age;
stu.name;
console.log(stu);
console.log(tea)