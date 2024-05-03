// Generate a random number between 1 and 100
var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

// Function to check the user's guess
function checkGuess() {
    var guess = parseInt(document.getElementById('guess-input').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Bitte eine valide Zahl zwischen 1 und 100 eingeben.");
        return;
    }
    attempts++;
    if (guess === secretNumber) {
        setMessage("Glückwunsch! Du hast die richtige Zahl in " + attempts + " Versuchen gefunden.", "green");
        setTimeout(resetGame, 3000); // Reset game after 3 seconds
    } else if (guess < secretNumber) {
        setMessage("Probiere eine höhere Zahl.", "blue");
    } else {
        setMessage("Probiere eine niedrigere Zahl.", "blue");
    }
    document.getElementById('guess-input').value = ''; // Clear input field after each guess
}

// Function to set message
function setMessage(message, color) {
    document.getElementById('message').style.color = color || "black";
    document.getElementById('message').textContent = message;
}

// Function to reset the game
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generate new secret number
    attempts = 0;
    setMessage(""); // Clear message
}
