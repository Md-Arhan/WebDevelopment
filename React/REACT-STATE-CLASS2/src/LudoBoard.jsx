import { useState } from "react"

export function LudoBoard(){
    let [move, setMoves] = useState({blue : 0, yellow : 0, red : 0, green : 0});
    let [arr, setArr] = useState(["no moves"])

    let updateBlue = () =>{
        // move.blue+1;
        // console.log(move.blue)
        // setMoves((prevMoves) => {
        //     return {...prevMoves, blue:prevMoves.blue+1}
        // });
        // arr.push("blue moves");
        setArr((prev) => {
            return [...prev, "blue moves"]
        })
        console.log(arr)
    }
    let updateyellow = () =>{
        // move.blue+1;
        console.log(move.yellow)
        setMoves((prevMoves) => {
            return {...prevMoves, yellow:prevMoves.yellow+1}
        });
    }
    let updatered = () =>{
        // move.blue+1;
        console.log(move.red)
        setMoves((prevMoves) => {
            return {...prevMoves, red:prevMoves.red+1}
        });
    }
    let updategreen = () =>{
        // move.blue+1;
        console.log(move.green)
        setMoves((prevMoves) => {
            return {...prevMoves, green:prevMoves.green+1}
        });
    }

    return (
        <div className="board">
            <p>Game Begins</p>
            {arr}
            <p>Blue moves ={move.blue}</p>
            <button  style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p >yellow moves = {move.yellow}</p>
            <button  style={{backgroundColor:"yellow", color:"black"}} onClick={updateyellow}>+1</button>
            <p>red moves = {move.red}</p>
            <button  style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
            <p >green moves = {move.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>

        </div>
    )
}