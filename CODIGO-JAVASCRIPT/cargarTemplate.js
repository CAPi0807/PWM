function addTemplate(id) {

        let template = id.content.cloneNode();
        let span = id.querySelector()
    
}
function add(url, id, idPagina) {
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(data => {
            const container = id.content.cloneNode(true);
            idPagina.appendChild(container);
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el template:', error);
        });
}