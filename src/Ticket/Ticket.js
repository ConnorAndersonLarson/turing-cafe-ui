import React, { Component } from 'react';
import './Ticket.css';

const Ticket = ({ id, name, date, time, guests }) => {
  return(
    <section className="card" id={id}>
      <p><b>{name}</b></p>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {guests}</p>
      <button>Cancel</button>
    </secton>
  )
}
