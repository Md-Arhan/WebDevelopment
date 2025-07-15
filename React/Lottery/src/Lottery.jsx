import { useState } from "react"
import "./Lottery.css"
import { generateTicket, sum } from "./helper";
import { Ticket } from "./Ticket";
import Button from "./Button";

export function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(generateTicket(n));

    let buyTicket = () => {
       setTicket(generateTicket(n));
    }

    let isWinning = winCondition(ticket);
    
    return (
        <div>
            <h1>Lottery</h1>
            <div className="tickets">
               <Ticket ticket={ticket}/> 
            </div>
            <br />
            {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
            <Button buyTicket={buyTicket}/>
            <h3>{isWinning && "Congratulations You Win!!" }</h3>
        </div>
    )
}