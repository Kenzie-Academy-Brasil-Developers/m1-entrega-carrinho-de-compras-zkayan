const productsCart = [
    {
        id: 1,
        name: "Item 1",
        price: 10.00
    },
    {
        id: 2,
        name: "Item 2",
        price: 20.00
    },
    {
        id: 3,
        name: "Item 3",
        price: 30.00
    },
    {
        id: 4,
        name: "Item 4",
        price: 40.00
    },
    {
        id: 5,
        name: "Item 5",
        price: 50.00
    },
]

let soma = 0;

const body = document.body;
const main = document.createElement("main");
const headerSection = document.createElement("section");
const ul = document.createElement("ul");

body.appendChild(main);

main.appendChild(headerSection);

let itemLabel = document.createElement("p");
let valorLabel = document.createElement("span");

valorLabel.classList.add("f-right");
itemLabel.innerText = "Item";
valorLabel.innerText = "Valor";
itemLabel.appendChild(valorLabel);

headerSection.appendChild(itemLabel);
headerSection.classList.add("header-section");

main.appendChild(ul);
ul.classList.add("list");

productsCart.forEach(prod => {
    let li = document.createElement("li");

    let price = document.createElement("span");

    price.classList.add('f-right');
    li.innerText = prod.name;
    price.innerText = `RS${prod.price.toFixed(2)}`;

    li.appendChild(price);

    ul.appendChild(li)

    soma += prod.price;
});

const footerSection = document.createElement("section");
main.appendChild(footerSection);

let total = document.createElement("p");
let totalSoma = document.createElement("span");

totalSoma.classList.add("f-right");
total.innerText = "Total:";
totalSoma.innerText = `RS${soma.toFixed(2)}`;
total.appendChild(totalSoma);

footerSection.appendChild(total);
footerSection.classList.add("footer-section");

btn = document.createElement("button");

btn.innerText = "Finalizar compra";
btn.classList.add("finish-button");

footerSection.appendChild(btn);