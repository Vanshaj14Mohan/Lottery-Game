import { useState } from "react";
// import "./Lottery.css"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery ({n, winningSum}){
    let [ticket, setTicket] = useState(genTicket(n)); //n no of tickets
    let isWinning = sum(ticket) === winningSum; //sum of tickets should be equal to winningSum

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
            <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h2>{isWinning && "Congratulations, you won the lottery!"}</h2>
        </div>
    );
}

export default Lottery;