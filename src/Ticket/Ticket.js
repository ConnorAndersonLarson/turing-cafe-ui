import React from 'react';
import './Ticket.css';

const Ticket = ({ id, name, date, time, guests, cancelReservation }) => {
  return(
    <section className="ticket" id={id}>
      <p><b>{name}</b></p>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {guests}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </section>
  )
}

export default Ticket;
