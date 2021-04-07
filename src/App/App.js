import React, { Component } from 'react';
import { getReservations, setReservation, removeReservation } from '../apiCalls.js'
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(err => this.setState({ error: "Hmmm, something isn't right..."}))
  }

  makeReservation = (newRes) => {
    setReservation(newRes)
      .then(result => {
        if (result.id) {
          this.setState({ reservations: [...this.state.reservations, result], error: '' })
        } else {
          this.setState({ error: 'Please fill out all fields please!' })
        }
      })
  }

  cancelReservation = (id) => {
    removeReservation(id)
      .then(response => {
        if (response.ok) {
          const updatedReservations = this.state.reservations.filter(res => res.id !== id);
          this.setState({ reservations: updatedReservations, error: '' });
        } else {
          this.setState({ error: 'It seems there was an issue deleting this reservation'});
        }
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeReservation={this.makeReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
