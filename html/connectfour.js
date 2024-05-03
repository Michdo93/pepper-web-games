var ROWS = 6;
var COLS = 7;
var board = [];
var currentPlayer = 'rot';
var gameover = false;

// Initialize the board
function initializeBoard() {
    var boardElement = document.getElementById('board');
    var cells = boardElement.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = (function(index) {
            return function() {
                dropPiece(index % COLS);
            };
        })(i);
    }
    for (var row = 0; row < ROWS; row++) {
        board[row] = [];
        for (var col = 0; col < COLS; col++) {
            board[row][col] = null;
        }
    }
}

// Drop a piece in the specified column
function dropPiece(col) {
    if (gameover) return;
    var row = getLowestEmptyRow(col);
    if (row !== -1) {
        var index = row * COLS + col;
        var cell = document.getElementById('board').getElementsByTagName('td')[index];
        cell.className += ' ' + currentPlayer;
        board[row][col] = currentPlayer;
        if (checkWinner(row, col)) {
            gameover = true;
            alert(currentPlayer.toUpperCase() + ' gewinnt!');
        } else if (checkDraw()) {
            gameover = true;
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'rot' ? 'gelb' : 'rot';
        }
    }
}

// Get the lowest empty row in the specified column
function getLowestEmptyRow(col) {
    for (var row = ROWS - 1; row >= 0; row--) {
        if (board[row][col] === null) {
            return row;
        }
    }
    return -1; // Column is full
}

// Check if there is a winner
function checkWinner(row, col) {
    var directions = [
        [0, 1], [1, 0], [1, 1], [-1, 1] // right, down, diagonal right, diagonal left
    ];
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var _a = directions_1[_i], dx = _a[0], dy = _a[1];
        var count = 1;
        for (var i = 1; i <= 3; i++) {
            var newRow = row + i * dy;
            var newCol = col + i * dx;
            if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS)
                break;
            if (board[newRow][newCol] === currentPlayer) {
                count++;
            }
            else {
                break;
            }
        }
        for (var i = 1; i <= 3; i++) {
            var newRow = row - i * dy;
            var newCol = col - i * dx;
            if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS)
                break;
            if (board[newRow][newCol] === currentPlayer) {
                count++;
            }
            else {
                break;
            }
        }
        if (count >= 4) {
            return true;
        }
    }
    return false;
}

// Check if it's a draw
function checkDraw() {
    for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < COLS; col++) {
            if (board[row][col] === null) {
                return false;
            }
        }
    }
    return true;
}

// Reset the game
function resetGame() {
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].className = 'cell';
    }
    for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < COLS; col++) {
            board[row][col] = null;
        }
    }
    currentPlayer = 'rot';
    gameover = false;
}

// Initialize the game
initializeBoard();
