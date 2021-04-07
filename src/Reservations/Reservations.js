import React from 'react';
import './Reservations.css';

const Reservations = ({ reservations }) => {

  const reserveTickets = reservations.map(res => {
    return (
      <Ticket
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
