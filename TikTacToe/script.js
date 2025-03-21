const board = document.getElementById("board"); //This selects the div element with the id="board" and stores it in the board variable. This represents the game grid.
const cells = document.querySelectorAll(".cell"); //This selects all elements with the class cell and store them in the cells variable as a NodeList.
const statusText = document.getElementById("status");//his is where the game status ( win, draw) is displayed.
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            statusText.textContent = `Player ${currentPlayer} Wins! 🎉`;
            return;
        }
    }

    if (!gameBoard.includes("")) {
        gameActive = false;
        statusText.textContent = "It's a Draw! 😲";
    }
}

function handleCellClick(event) {
    const index = event.target.dataset.index;

    if (gameBoard[index] || !gameActive) return;

    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    
    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "";
    cells.forEach(cell => (cell.textContent = ""));
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
