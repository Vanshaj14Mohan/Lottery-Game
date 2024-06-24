import { useState } from "react";
import "./Lottery.css"
import { genTicket, sum } from "./helper";

function Lottery (){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () =>{
        setTicket(genTicket(3));
    }

    return (
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
              <span>{ticket[0]}</span>
              <span>{ticket[1]}</span>
              <span>{ticket[2]}</span>
            </div>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h2>{isWinning && "Congratulations, you won the lottery!"}</h2>
        </div>
    );
}

export default Lottery;