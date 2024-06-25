//we will generate ticket number in this div
import TicketNum from "./TicketNum";
import "./Ticket.css";

function Ticket({ticket}){
    return (
        <div className="ticketStyle">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    );
}

export default Ticket;