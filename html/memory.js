var cards = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];
var moves = 0;
var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

var gameContainer = document.getElementById('game-container');
var moveCounter = document.getElementById('move-counter');

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createBoard() {
    gameContainer.innerHTML = '';
    moves = 0;
    moveCounter.textContent = moves;
    lockBoard = false;

    var shuffledCards = shuffle(cards);
    for (var i = 0; i < shuffledCards.length; i++) {
        var card = shuffledCards[i];
        var memoryCard = document.createElement('div');
        memoryCard.className = 'card hidden';
        memoryCard.dataset.framework = card;
        memoryCard.textContent = card;

        memoryCard.addEventListener('click', flipCard);

        gameContainer.appendChild(memoryCard);
    }
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.classList.remove('hidden');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    updateMoves();
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(function () {
        firstCard.classList.add('hidden');
        secondCard.classList.add('hidden');
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function updateMoves() {
    moves++;
    moveCounter.textContent = moves;
}

function restartGame() {
    createBoard();
}

createBoard();
