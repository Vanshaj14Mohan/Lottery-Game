// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Lottery from "./Lottery";
// import TicketNum from "./TicketNum";
// import Ticket from "./Ticket";

  function App(){
    return (
      <>
      <Lottery n={3} winningSum={15}/>
      {/* <Lottery/> */}
      {/* <TicketNum num={7}/> */}
      {/* <Ticket ticket = {[5, 3, 5]}/> */}
      {/* <Ticket ticket = {[5, 3, 5, 7]}/> */}
      </>
    );
  }

  export default App;
