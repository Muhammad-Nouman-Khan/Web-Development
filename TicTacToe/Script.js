const cells = document.querySelectorAll(".cell");
const statusInfo = document.querySelector("#statusInfo");
const resetBtn = document.querySelector("#resetBtn");

const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.mp3");
const audioOver = new Audio("gameover.mp3");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {

    cells.forEach((cell) => cell.addEventListener("click", cellClicked));
    resetBtn.addEventListener("click", resetGame);
    statusInfo.textContent = `${currentPlayer}'s Turn`;
    running = true;
}

function cellClicked() {
    audioTurn.play();
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    } else {
        updateCell(this, cellIndex);
    }

    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }

        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            document.getElementById("win-img").style.display = "block";
            break;
        }
    }
    if (roundWon) {
        statusInfo.textContent = `${currentPlayer}'s Wins!`;
        audioOver.play();
        running = false;
    } else if (!options.includes("")) {
        statusInfo.textContent = `Draw!`;
        audioOver.play();
        running = false;
    } else {
        changePlayer();
    }
}

function changePlayer() {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    statusInfo.textContent = `${currentPlayer}'s Turn`;
}
function resetGame() {
    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    running = false;
    cells.forEach(cell => cell.textContent = "");
    statusInfo.textContent = `${currentPlayer}'s Turn`;
    document.getElementById("win-img").style.display = "none";
    running = true;
}
