const baseURL = 'http://localhost:3001/api/v1/reservations';

export const getReservations = () => {
  return fetch(`${baseURL}`)
    .then(response => response.json())
}

export const setReservation = () => {

}

export const removeReservation = () => {
  
}
