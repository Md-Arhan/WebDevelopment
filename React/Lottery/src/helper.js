function generateTicket(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10)
    }

    return arr;
}

function sum(arr){
   return arr.reduce((sum, curr) => sum + curr, 0);
}

export {generateTicket, sum};

/*The reduce function in JavaScript (and similar functions in other languages) is used to reduce an array to a single value by applying a callback function repeatedly on each element of the array, along with an accumulator.
Syntax (JavaScript):
array.reduce(callback, initialValue)
Parameters:
callback: A function that takes:
accumulator – the value returned from the previous iteration (starts with initialValue if given),
currentValue – the current element being processed in the array.
initialValue (optional): The initial value for the accumulator. If not provided, the first element is used as the initial accumulator and iteration starts from the second element. 


Let's break it down:
arr.reduce(...): You're calling the reduce method on the array arr.

(sum, curr) => sum + curr: This is a callback function that:

Takes sum (the accumulator) and curr (the current element).

Adds them together and returns the result, which becomes the new sum in the next iteration.

0: This is the initial value for sum.
*/