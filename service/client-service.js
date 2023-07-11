const createNewLine = (nombre, email) => {
  const line = document.createElement('tr')
  const content = `
    <td class="td" data-td>${nombre}</td>
      <td>${email}</td>
        <td>
          <ul class="table__button-control">
            <li>
              <a
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
                >Editar</a>
            </li>
            <li>
              <button
                class="simple-button simple-button--delete"
                type="button">
                  Eliminar
              </button>
            </li>
          </ul>
        </td>
`
  line.innerHTML = content
  return line
}

const table = document.querySelector('[data-table]')
const http = new XMLHttpRequest()

//Abrir http(metodo,url)
http.open('GET', 'http://localhost:3000/perfil')
http.send()

http.onload = () => {
  const data = JSON.parse(http.response)

  data.forEach((perfil) => {
    const newLine = createNewLine(perfil.nombre, perfil.email)
    table.appendChild(newLine)
  })
}
