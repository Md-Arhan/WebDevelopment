import './App.css'
import { Lottery } from './Lottery'
// import { TicketNumber } from "./TicketNum";
import { Ticket } from "./Ticket"
import { sum } from './helper'

function App() {
  let winCondition = (ticket) =>{
    return ticket[0] === 0;
  }

  return (
    <>
     {/* <Ticket ticket={[1, 2, 3]}/>
     <Ticket ticket={[6, 8, 6, 5]}/> */}
     <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
