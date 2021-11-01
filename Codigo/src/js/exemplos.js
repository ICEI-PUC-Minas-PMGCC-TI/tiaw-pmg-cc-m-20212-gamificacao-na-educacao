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

function addCardExamples(examples) {
    let cardAmount = $(".container > .row").children().length;
    let exampleAmount = examples.length;

    for (let i = cardAmount; i < cardAmount + 4; i++) {
        if (i >= exampleAmount) {
            break;
        }
        let example = examples[i];
        let title = example["titulo"];
        let image = example["imagem"];
        let description = example["descricao"];
        $(".container > .row").append($(`<div class="col-6"></div>`).append(
            $("<img />", {
                src: image,
                alt: title
            }),
            $(`<h2>${title}</h2>`),
            $(`<p>${description}</p>`),
            $("<a></a>", {
                text: "Mais sobre",
                href: example["url"],
                target: "_blank"
            })
        ));
    }
    if (cardAmount + 4 >= exampleAmount) {
        $("#load-examples").hide();
    }
}

$("#load-examples").click(() => {
    addCardExamples(getExamples());
});