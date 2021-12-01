window.onload = () => {
    main();
}

async function fetchData() {
    await fetch("../json/noticias.json")
        .then((response) => response.json())
        .then((data) => {
            setDatabase(data);
        });
}

async function main() {
    await fetchData();
    showCards();

    document.getElementById("loadNews").onclick = showCards;
}

function getDatabase() {
    return JSON.parse(sessionStorage.getItem("db_news"))["noticias"];
}

function setDatabase(data) {
    sessionStorage.setItem("db_news", JSON.stringify(data));
}

function showCards() {
    const database = getDatabase();
    const databaseLength = database.length;
    const cardAmount = document.querySelector(".container").children.length;

    for (let i = cardAmount; i < cardAmount + 3; i++) {
        if (i >= databaseLength) {
            break;
        }
        let news = database[i];

        document.querySelector(".container").innerHTML += `
            <div class="row news-card">
                <div class="col-12 col-md-3">
                    <a href="${news['url']}" target="_blank"><img style="max-width: 100%" src="${news['imagem']}" alt="Imagem de ${news['titulo']}"></a>
                </div>
                <div class="col-12 col-md-9 d-flex flex-column justify-content-evenly">
                    <h2><a href="${news['url']}" target="_blank">${news['titulo']}</a></h2>
                    <p>${news['descricao'].length > 400 ? news['descricao'].substring(0, 397) + '...' : news['descricao']}</p>
                    <a class="more-examples-btn" href="${news['url']}" target="_blank">Ver notícia</a>
                </div>
            </div>
        `
    }
    if (cardAmount + 3 >= databaseLength) {
        document.getElementById("loadNews").style.display = "none";
    }
}
