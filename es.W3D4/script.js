function createH1() {
    const shopName = document.createElement("h1");
    shopName.innerText = "Amazon 2.0";
    const shopNamaeDiv = document.createElement("div");
    shopNamaeDiv.appendChild(shopName);
    document.body.append(shopNamaeDiv);
}
createH1()

function renderProducts() {
    const mainContainer = document.createElement("main");
    const container = document.createElement("div");
    container.classList.add("products-container");
    products.forEach((product) => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("cardContainer");
        const title = document.createElement("h2");
        title.textContent = product.title;
        const descriptions = document.createElement("p");
        descriptions.textContent = product.descriptions;
        const price = document.createElement("p");
        price.classList.add("card-price");
        price.textContent = product.price;
        const img = document.createElement("img");
        img.src = product.img;
        img.classList.add("card-img");
        const link = document.createElement("a");
        link.classList.add("link-card");
        link.href = product.link;
        link.textContent = "premi qui";
        cardContainer.append(title, descriptions, price, img, link);
        container.append(cardContainer);
        mainContainer.append(container);
    })
    document.body.append(mainContainer);
}
renderProducts()

function renderFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer-container");
    const containerName = document.createElement("div");
    containerName.textContent = footerDate.name;
    const containerLink = document.createElement("div");
    containerLink.classList.add("link-container");
    containerLink.textContent = footerDate.link;
    footer.append(containerName, containerLink);
    document.body.append(footer);
}
renderFooter()
function aggiungiCommento() {
    const commento = document.createElement("input");
    document.body.append(commento);
    const commenti = document.querySelector("#commenti");

}
aggiungiCommento()

function cambiaContenuto() {

    const contenutoH1 = document.createElement("h1");
    contenutoH1.innerHTML = "<h3>benvenuto</h3>";
    console.log(contenutoH1.innerHTML);
}
cambiaContenuto()

function cambiaBackGroundColour() {
    document.body.style.backgroundColor = "red";
    console.log(cambiaBackGroundColour);

}
cambiaBackGroundColour()

function cambiaIndirizzoFooter() {

    const nuovoIndirizzoFooter = document.getElementsByClassName("link-container");
    nuovoIndirizzoFooter.innerHTML = "nuovo indirizzo";
    console.log(cambiaIndirizzoFooter);
}
cambiaIndirizzoFooter()

function aggiungiClassCss() {
    document.querySelectorAll("link-card");

    console.log(aggiungiClassCss);

}

aggiungiClassCss()

function invisibility() {
    const elementi = document.getElementsByClassName("card-img");

    elementi["0"].className = "";
}

invisibility()
