$(document).ready(() => {
    main();
});

async function fetchData() {
    await fetch("../json/exemplos.json")
        .then((response) => response.json())
        .then((data) => {
            sessionStorage.setItem("allExamples", JSON.stringify(data));
        });
}

async function main() {
    await fetchData();
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
        $(".container > .row").append($(`
            <div class="col-12 col-md-6 p-3">
                <div class="example-card">
                    <div id="${example['id']}" class="example-img" onclick="location.href='./exemplo.html'" style="background-image: url('${example["imagem"]}'); cursor: pointer;">
                    </div>
                    <div class="example-info">
                        <h2>${example['titulo']}</h2>
                        <p>${
                            example['descricao'].length > 400 ? example['descricao'].substring(0, 397) + '...' : example['descricao']
                        }</p>
                        <a id="${example['id']}" class="more-examples-btn" href="./exemplo.html">Mais sobre</a>
                    </div>
                </div>
            </div>
        `));
    }
    // Se nao houver mais cards a serem carregados o botao desativa
    if (cardAmount + 4 >= exampleAmount) {
        $("#load-examples").hide();
    }

    $(".example-img").click(function() {
        sessionStorage.setItem("example", JSON.stringify(examples[parseInt(this.id)]));
    });

    $(".container a").click(function() {
        sessionStorage.setItem("example", JSON.stringify(examples[parseInt(this.id)]));
    });
}

$("#load-examples").click(() => {
    addCardExamples(getExamples());
});