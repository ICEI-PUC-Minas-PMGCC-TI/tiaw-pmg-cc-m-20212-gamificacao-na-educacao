$(document).ready(() => {
    fetchData();
});

async function fetchData() {
    await fetch("../json/exemplos.json")
        .then((response) => response.json())
        .then((data) => {
            sessionStorage.setItem("allExamples", JSON.stringify(data));
        });
    addCardExamples(getExamples());
}

function getExamples() {
    return JSON.parse(sessionStorage.getItem("allExamples"))["exemplos"];
}

function accessedExample(example) {
    sessionStorage.setItem("accessedExample", JSON.stringify(example));
}

function addCardExamples(examples) {
    let cardAmount = $(".container > .row").children().length;
    let exampleAmount = examples.length;

    // Gera 4 cards no container
    for (let i = cardAmount; i < cardAmount + 4; i++) {
        // Para a execucao se nao houver mais cards para carregar
        if (i >= exampleAmount) {
            break;
        }
        let example = examples[i];
        $(".container > .row").append($("<div id='aaa' class='col-6'></div>").append(
            $("<img />", {
                src: example["imagem"],
                alt: example["titulo"]
            }),
            $(`<h2>${example["titulo"]}</h2>`),
            $(`<p>${example["descricao"]}</p>`),
            $("<a></a>", {
                id: example["id"],
                text: "Mais sobre",
                href: "./exemplo.html"
            })
        ));
    }
    // Se nao houver mais cards a serem carregados o botao desativa
    if (cardAmount + 4 >= exampleAmount) {
        $("#load-examples").hide();
    }

    $(".container a").click(function() {
        sessionStorage.setItem("example", JSON.stringify(examples[parseInt(this.id)]));
    });
}

$("#load-examples").click(() => {
    addCardExamples(getExamples());
});