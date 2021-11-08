$(document).ready(() => {
    // Caso nenhum exemplo tenha sido visitado
    // redireciona para a pagina de exemplos
    if (sessionStorage.getItem("example") === null)
        location.replace("./exemplos.html");
    else
        addExample(JSON.parse(sessionStorage.getItem("example")));
});

function addExample(example) {
    $(".hero").html(`<h1>${example['titulo']}</h1>`)
    $(".container").append($(`
        <div class="example-card">
            <div class="example-img" onclick="location.href='${example['url']}'" style="background-image: url('${example["imagem"]}'); cursor: pointer;">
            </div>
            <div class="example-info">
                <h2>${example['titulo']}</h2>
                <p>${example['descricao']}</p>
                <a id="${example['id']}" class="more-examples-btn" href="${example['url']}">Ir para a página</a>
            </div>
        </div>
    `));
}