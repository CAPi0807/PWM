function addTemplate(id) {

    let template = id.content.cloneNode();
    let span = id.querySelector()

}
function add(url, id) {
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(data => {
            let container = document.querySelector(id);
            container.innerHTML = data;
        })
}

function insertarContenidoDesdeJSON(jsonFile, containerSelector) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            let container = document.querySelector(containerSelector);
            if (!container) {
                console.error(`No se encontró el contenedor con el selector ${containerSelector}`);
                return;
            }
            data.forEach(item => {
                // Verificar si los campos requeridos están presentes en el objeto
                if (item.logo) {
                    let img = document.createElement('img'); // Crear un elemento img
                    img.src = item.logo; // Establecer la fuente de la imagen usando la propiedad 'logo'
                    container.appendChild(img); // Agregar la imagen al contenedor
                } else {
                    console.error(`El objeto del JSON no tiene los campos necesarios: ${JSON.stringify(item)}`);
                }
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}


function loadTable(jsonFile, tableSelector) {
    // Obtener la referencia al cuerpo de la tabla
    const tbody = document.querySelector(tableSelector + ' tbody');

    // Cargar el JSON y procesar los datos
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Iterar sobre los datos y crear filas de tabla dinámicamente
            data.forEach(item => {
                const row = document.createElement('tr');

                // Añadir el tipo de requisito (Mínimo o Recomendado)
                const tipoCell = document.createElement('td');
                tipoCell.textContent = item.tipo;
                row.appendChild(tipoCell);

                // Añadir los requisitos individuales
                Object.values(item.requisitos).forEach(requisito => {
                    const cell = document.createElement('td');
                    cell.textContent = requisito;
                    row.appendChild(cell);
                });

                // Agregar la fila a la tabla
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}