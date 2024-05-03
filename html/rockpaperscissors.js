document.addEventListener('DOMContentLoaded', function() {
    var choices = document.querySelectorAll('.choice');
    var result = document.getElementById('result');
    var resetButton = document.getElementById('reset');

    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', playGame);
    }
    resetButton.addEventListener('click', resetGame);

    function playGame(e) {
        var playerChoice = e.target.id;
        var computerChoice = getComputerChoice();
        var winner = getWinner(playerChoice, computerChoice);
        displayResult(winner, computerChoice);
    }

    function getComputerChoice() {
        var choices = ['Stein', 'Papier', 'Schere'];
        var randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function getWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        } else if ((player === 'rock' && computer === 'Schere') ||
                   (player === 'paper' && computer === 'Stein') ||
                   (player === 'scissors' && computer === 'Papier')) {
            return 'player';
        } else {
            return 'computer';
        }
    }

    function displayResult(winner, computerChoice) {
        var message = '';
        if (winner === 'player') {
            message = 'Du hast gewonnen!';
        } else if (winner === 'computer') {
            message = 'Der Computer gewinnt!';
        } else {
            message = 'Es ist ein Unentschieden!';
        }
        result.textContent = message + ' Computer wählt ' + computerChoice + '.';
    }

    function resetGame() {
        result.textContent = '';
    }
});
//test
