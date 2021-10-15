let cardUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=5"

const containers = document.querySelectorAll('.card');

const fetchText = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(data => (dealCard(data)))
}

fetchText(cardUrl)

const dealCard = (data) => {
  for (let i = 0; i < containers.length; i++) {
    const images = document.createElement('img');
    images.classList.add(`image${i}`)
    images.setAttribute('src', `${data.cards[i].image}`);
    containers[i].appendChild(images);
  }
}



