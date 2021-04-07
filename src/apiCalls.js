const baseURL = 'http://localhost:3001/api/v1/reservations';

export const getReservations = () => {
  return fetch(`${baseURL}`)
    .then(response => response.json())
}

export const setReservation = (newRes) => {
  return fetch(`${baseURL}`, {
    method: 'POST'
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newRes)
  })
    .then(response => response.json())
}

export const removeReservation = (id) => {
  return fetch(`${baseURL}/${id}`, {method: 'DELETE'})
}
