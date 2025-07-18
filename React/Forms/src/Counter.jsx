import { useEffect, useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0);
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);


    let incCount = () => {
       setCount((prev) => {
        return prev+1;
       })
    }
    let incCounts = () => {
       setCountx((prev) => {
        return prev+1;
       })
    }
    let incCountss = () => {
       setCounty((prev) => {
        return prev+1;
       })
    }

    useEffect(function sideEffect() {
        console.log("renderded")
    }, [])

   return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
        <h3>Countx = {countx}</h3>
        <button onClick={incCounts}>Increase Count</button>
        <h3>County = {county}</h3>
        <button onClick={incCountss}>Increase Count</button>
    </div>
   )
}