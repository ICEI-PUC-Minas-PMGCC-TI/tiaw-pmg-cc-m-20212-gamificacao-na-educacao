$(document).ready(() => {
    // Caso nenhum exemplo tenha sido visitado
    // redireciona para a pagina de exemplos
    if (sessionStorage.getItem("example") === null)
        location.replace("./exemplos.html");
    else
        addExample(JSON.parse(sessionStorage.getItem("example")));
});

function addExample(example) {
    $(".container").append(
        $("<img />", {
            src: example["imagem"],
            alt: example["titulo"]
        }),
        $(`<h2>${example["titulo"]}</h2>`),
        $(`<p>${example["descricao"]}</p>`),
        $("<a></a>", {
            text: "Visitar página",
            href: example["url"]
        })
    )
}