document.addEventListener('DOMContentLoaded', async function() {
    await cargarEstructura();
    // Dado que cargarEstructura es async, ahora puedes asegurarte de que todo ha cargado
});

async function cargarEstructura() {
    document.body.appendChild(await cargarTemplate('../CODIGO-HTML/TEMPLATES/Header/header.html'));
    document.body.appendChild(await cargarTemplate('../CODIGO-HTML/TEMPLATES/Footer/footer.html'));

}

async function cargarTemplate(url) {
    let response = await fetch(url);
    let text = await response.text();

    let template = document.createElement('template');
    template.innerHTML = text;
    return document.importNode(template.content, true);
}