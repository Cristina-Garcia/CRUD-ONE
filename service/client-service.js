const listClients = () =>
  fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json())

const createClient = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4(),
    }),
  })
}

const deleteClient = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE',
  })
}
const detailClient = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  )
}
const updateClient = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre,
      email,
    }),
  })
    .then((respuesta) => {
      respuesta
    })
    .catch((error) => console.log(error))
}
export const clientServices = {
  listClients,
  createClient,
  deleteClient,
  detailClient,
  updateClient,
}
