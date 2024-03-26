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