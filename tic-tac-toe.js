const playerO = "O";
const playerX = "X";
let playerTurn = playerO;
let playerOArray = [];
let playerXArray = [];

//const gameArr = [];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function getWinner() {

    function winCheck(arr, target) {
        return target.every(v => arr.includes(v))
    };

    var won;
    var winner;
    for (let i = 0; i < winningCombinations.length; i++) {
        won = winCheck(playerOArray,winningCombinations[i]);
        winner = playerO;
        if (won)
            break;
        
        won = winCheck(playerXArray,winningCombinations[i]);
        winner = playerX
        if (won)
            break;
        
    }

    if (won) {
        if (winner == playerX) {
            var win = document.getElementById("status");
            win.innerHTML = "Congratulations! X is the Winner!";
            win.classList.add("you-won");
        }
        else if (winner == playerO) {
            var win = document.getElementById("status");
            win.innerHTML = "Congratulations! O is the Winner!";
            win.classList.add("you-won");
        }
    }

}

function clickedBox(e, pos) {
    const clickedCell = e.target;
    if (playerTurn == playerX) {
        clickedCell.classList.add("X");
        clickedCell.innerHTML = "X";
        cellIndex = playerX;
        playerXArray.push(pos);
        playerTurn = playerO;
    }
    else if (playerTurn == playerO) {
        clickedCell.classList.add("O");
        clickedCell.innerHTML = "O";
        cellIndex = playerO;
        playerOArray.push(pos);
        playerTurn = playerX;
    }
    getWinner();
}

function mouseOver(e) {
    const cell = e.target;
    cell.classList.add("hover");
}

function mouseOut(e) {
    const cell = e.target;
    cell.classList.remove("hover");
}


window.onload = function () { displayBoard() }
//window.onload = function(){
function displayBoard() {
    var layout = document.getElementById("board").children;
    for (let i = 0; i < layout.length; i++) {
        const elem = layout[i];
        elem.className = "square";
        elem.addEventListener("click", (e) => {
            clickedBox(e, i);
        });
        elem.addEventListener("mouseover", mouseOver);
        elem.addEventListener("mouseout", mouseOut);
    }
}