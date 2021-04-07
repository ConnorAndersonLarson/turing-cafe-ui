import React from 'react';
import Ticket from '../Ticket/Ticket.js'
import './Reservations.css';

const Reservations = ({ reservations }) => {

  const reserveTickets = reservations.map(res => {
    return (
      <Ticket
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        guests={res.number}

      />
    )
  })

  return(
    <section className='reservationTickets'>
      {reserveTickets}
    </section>
  )

}

export default Reservations;
