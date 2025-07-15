import { useState } from "react"

function init(){
    console.log("init was called")
    return Math.random();
}

export default function Counter(){
    // let count = 0;

    // function incCount(){
    //     count++;
    //     console.log(count);
    // }

    // let arr = useState(0);
    // console.log(arr);
    
    const [count, setCount] = useState(init);  //initalization step -> only these line will be ignore will re-rendering component
    console.log("component rendered");
    // console.log(`count = ${count}`)

    let incCount = () =>{
        // setCount(prev => prev+2);
        setCount(prev => prev+1);  
        // setCount(count+1); //only one time the value increases
        // setCount((currVal) => {
        //     currVal + 1;
        // })
        // setCount(25);
        // console.log(`inside inCount, count = ${count}`)
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={incCount}>increase</button>
        </div>
    )
}   

//the value is going to update at the render state, not only while calling method
//Only re-render while the value changes not everytime