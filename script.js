const images = document.getElementsByClassName("back-image");
const cards = document.querySelectorAll(".cards");

function loader() {
    document.addEventListener('DOMContentLoaded', function () {
        for (let i = 0; i < images.length; i++) {
            images[i].src = 'card-back.jpeg';
        }
    }, false);
}


const flippedCards = [];

function flipCard() {

    if (flippedCards.length < 2) {
        this.classList.add('flip');
        let flippedCard = this;
        flippedCards.push(flippedCard);
    }

    if (flippedCards.length === 2) {
        console.log(flippedCards[0] === flippedCards[1])
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

loader();
