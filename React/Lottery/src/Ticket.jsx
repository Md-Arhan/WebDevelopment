import { TicketNumber } from "./TicketNum"
import "./Ticket.css"

export function Ticket({ticket}){

    return (
        <div className="ticket">
          <p>Ticket</p>
          {ticket.map((num, idx) =>(
            <TicketNumber num={num}  key={idx}/>
          ))}
        </div>
    )
}