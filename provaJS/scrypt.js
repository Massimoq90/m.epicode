const globalData = {
    navbar: {
        title: "il mio sito",
        menu: [
            "menu1",
            "menu2",
            "menu3",
            "menu4",
        ],
    },
    cards: [
        {
            title: "titleCard1",
            description: "blablablablabla",
            isVisible: true,
            price: 15,
        },
        {
            title: "titleCard2",
            description: "blablablablabla",
            isVisible: true,
            price: 25,
        },
        {
            title: "titleCard3",
            description: "blablablablabla",
            isVisible: false,
            price: 50,
        },
        {
            title: "titleCard4",
            description: "blablablablabla",
            isVisible: false,
            price: 45,
        },
    ]
}

const navbar = document.getElementById("navbar");
// console.log("navbar");
const main = document.getElementById("main");
// console.log("main");

function createLogo() {
    const logoContainer = document.createElement("div");
    const imgLogo = document.createElement("img");
    imgLogo.src = "https://picsum.photos/seed/picsum/200/300";
    logoContainer.append(imgLogo);
    navbar.append(logoContainer);
}
createLogo()

function createAndAppendSiteTitle() {
    const titleContainer = document.createElement("h1");
    titleContainer.textContent = "globalData.navbar.title";
    navbar.append(globalData.navbar.title);
}
createAndAppendSiteTitle()
function createAndAppendMenu() {
    const navMenuUl = document.createElement("ul");
    globalData.navbar.menu.forEach(menuLi => {
        const navMenuLi = document.createElement("li");
        navMenuLi.textContent = menuLi;
        navMenuUl.append(navMenuLi);
    });
    navbar.append(navMenuUl);
}
createAndAppendMenu()

function createAndAppendCards() {
    globalData.cards.forEach(card => {
        if (card.isVisible === true) {
            const cardContainer = document.createElement("div");
            const cardTitle = document.createElement("h1");
            cardTitle.textContent = card.title;
            const cardDescription = document.createElement("p");
            cardDescription.textContent = card.description;
            const cardPrice = document.createElement("p");
            cardPrice.textContent = card.price;
            main.append(cardContainer);
            cardContainer.append(cardTitle, cardDescription, cardPrice);
        }
    }
    );
}
createAndAppendCards()

function createAndAppendTotalPrice() {
    const TotalPrice = document.createElement("div");
    let totalSum = 0;
    globalData.cards.forEach(card => {
        totalSum += card.price;
        TotalPrice.textContent = totalSum;
        main.append(TotalPrice);
    }
    )

}
createAndAppendTotalPrice()