import { use } from "react";
import { useState } from "react";

export default function likeButton(){
    let clicked = () =>{
        console.log("clicked");
    }

    // const [count, setCount] = useState(0);
    const [click, setClick] = useState("unclicked");
    let [count, setCount] = useState(0);

    function control(){
        if(click == "clicked"){
            setClick(prev => "unclicked");
            setCount(prev => prev-1)
        }else{
            setClick(prev => "clicked");
            setCount(prev => prev+1)
        }
    }

    const styles = {color : "red"}
    
    return (
        <>
        <p  onClick={control}>{click == "clicked"? <i style={styles} className="fa-solid fa-heart"></i> :  <i className="fa-regular fa-heart"></i>} {count}</p>
        </>
    ); 
}


/*Closure:
A closure is a function that remembers its lexical scope, even when the function is executed outside that scope.
Definition: A closure is created when a function accesses variables from its outer scope, even after the outer function has finished executing.
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // outer() returns inner(), and inner has closure over `count`

counter(); // 1
counter(); // 2
counter(); // 3

inner() is returned from outer()
Even though outer() has finished, inner() still remembers the variable count
This is because of a closure



 What is Scope Chaining?
Scope chaining is the process by which JavaScript looks for variables from inner to outer scopes, until it either finds the variable or reaches the global scope.
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c); // Accesses a from global, b from outer, c from inner
  }

  inner();
}

outer();

What’s happening?
inner() looks for variables in its own scope (c)
If not found, it goes to its outer function's scope (b)
If still not found, it checks the global scope (a)
This is called the scope chain.
*/