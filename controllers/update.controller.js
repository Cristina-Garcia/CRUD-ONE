import { clientServices } from '../service/client-service.js'

const formulario = document.querySelector('[data-form]')
const getInformation = () => {
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  const name = document.querySelector('[data-nombre]')
  const email = document.querySelector('[data-email]')

  if (id === null) {
    window.location.href = '/screens/error.html'
  }

  clientServices.detailClient(id).then((perfil) => {
    name.value = perfil.nombre
    email.value = perfil.email
  })
}

getInformation()

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  const name = document.querySelector('[data-nombre]').value
  const email = document.querySelector('[data-email]').value
  console.log(name, '__', email)
  clientServices.updateClient(name, email, id).then(() => {
    window.location.href = '/screens/edicion_concluida.html'
  })
})
