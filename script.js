const backImages = document.getElementsByClassName("back-image");
const cards = document.querySelectorAll(".cards");
const frontImages = document.querySelectorAll(".front-image");

const gallery = [
    "./images/facebook.png",
    "./images/youtube.png",
    "./images/microsoft.png",
    "./images/amazon.png",
    "./images/apple.png",
    "./images/facebook.png",
    "./images/google.png",
    "./images/microsoft.png",
    "./images/youtube.png",
    "./images/amazon.png",
    "./images/google.png",
    "./images/apple.png",
];


function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Used like so
shuffle(gallery);


function loader() {
    for (let i = 0; i < gallery.length; i++) {
        frontImages[i].src = gallery[i]
    }
    for (let i = 0; i < backImages.length; i++) {
        backImages[i].src = 'images/card-back.jpeg';
    }
}


let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();

}

function checkForMatch() {
    if (firstCard.innerHTML === secondCard.innerHTML) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1000);
}


cards.forEach(card => card.addEventListener('click', flipCard));

loader();
