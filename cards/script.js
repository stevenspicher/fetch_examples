

let cardUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"

let picElement = document.createElement("img");
let cardFrame = document.querySelectorAll(".card");


const fetchText = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(data => (dealCard(data)))
}

fetchText(cardUrl)

const dealCard = (data) => {
  
  picElement.src = `${data.cards[0].image}`;
  cardFrame[0].appendChild(picElement)
  cardFrame[1].appendChild(picElement)
 }



