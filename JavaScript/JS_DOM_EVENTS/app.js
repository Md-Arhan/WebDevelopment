// let btn = document.querySelectorAll('button');
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was click");
//     alert("clicked");
// }

// function hello( a, b){
//     console.log("hello");
// }

// function sayNme(){
//     console.log("arhan")
// }

// for(let btns of btn){
//     // btns.onclick = hello;
//     // btns.onclick = sayNme;
//     // btns.onmouseenter = () => {
//     //     console.log("you enters")
//     // }

//     //addEventListener
//     // btns.addEventListener("click", () => {
//     //     sayNme();
//     // })
//     // btns.addEventListener("click", () => {
//     //     hello();
//     // })

//     //another way
//     btns.addEventListener("dblclick", hello);
//     btns.addEventListener("dblclick", sayNme);
// }


// btn.onclick = hello();
// btn.onclick = hello;

/*You're calling the function immediately, and whatever it returns (which is undefined in this case) is assigned to btn.onclick.

That means:
Your hello() function runs right away, before the button is ever clicked — and nothing happens when the button actually gets clicked, because .onclick = undefined.
 */

/*
1. If you don’t need arguments:
btn.onclick = hello; // passes the function itself, not the result

2. If you want to run hello() with arguments:
btn.onclick = () => hello(1, 2); // arrow function calls `hello` with arguments on click */



//this 

// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

//not a good practice

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = "blue";
//     console.log(this);
//     console.log(this.innerText);
// })

// p.addEventListener('click', function() {
//     this.style.backgroundColor = "blue";
//     console.log(this);
//     console.log(this.innerText);
// })

// h1.addEventListener('click', function() {
//     this.style.backgroundColor = "blue";
//     console.log(this);
//     console.log(this.innerText);
// })

// h3.addEventListener('click', function() {
//     this.style.backgroundColor = "blue";
//     console.log(this);
//     console.log(this.innerText);
// })



//good preactice to reduce redundancy
// function changeColor(){
//     this.style.backgroundColor = "blue";
//     console.log(this);
//     console.log(this.innerText);
// }

// btn.addEventListener('click', changeColor)

// p.addEventListener('click', changeColor)

// h1.addEventListener('click', changeColor)

// h3.addEventListener('click', changeColor)





//keyboard events

// let btn = document.querySelector('button');

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keyup", function (event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key pressed");
//     //keyup, keydown
// })


// inp.addEventListener("keydown", function(event){
//     // console.log("code =" == event.code);
//     if(event.code == "ArrowUp"){
//         console.log("move forward")
//     }else if(event.code == "ArrowDown"){
//         console.log("move down")
//     }else if(event.code == "ArrowLeft"){
//         console.log("move left")
//     }else if(event.code == "ArrowRight"){
//         console.log("move right")
//     }else if(event.code == "KeyL"){
//         console.log(" L")
//     }else if(event.code == "KeyR"){
//         console.log("R")
//     }

// })



//form

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("submitted");


//     // let inp = document.querySelector("input");
//     // console.dir(inp);
//     // console.log(inp.value);

//     let user =  this.elements[0];  //form.element[0]
//     console.log(user.value);
//     console.dir(form);
// });



//change event

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("input");

// user.addEventListener("change", function () {
//     console.log("change event");
//     console.log("final value = ", this.value)
// })

// user.addEventListener("input", function () {
//     console.log("input changed");
//     console.log("final value = ", this.value)
// })




// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input", function(){
//     console.log(this.value);
//     p.innerText = this.value;
// })





//event bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("div was clicked")
})
ul.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("ul was clicked")
})

for(lis of li){
    lis.addEventListener("click", function(e){
        e.stopPropagation();
        console.log("li was clicked")
    })
}

