const gameArr = []
const playerO = "O";
const playerX = "X";
// START DEFAULT AS PLAYERX
let playerTurn = playerX
function clickedBox(e){
    const clickedCell = e.target;
    if (playerTurn === playerX) {
        clickedCell.classList.add("X");
        clickedCell.innerHTML = "X";
        playerTurn = playerO;
    }
    else{
        clickedCell.classList.add("O");
        clickedCell.innerHTML="O";
        playerTurn = playerX;
    }
    gameArr.push(playerTurn);
    console.log("button clicked");
    console.log(gameArr);
}

function mouseOver(e){
    const cell = e.target;
    cell.classList.add("hover");
}
function mouseOut(e){
    const cell = e.target;
    cell.classList.remove("hover");
}

window.onload = function (){displayBoard()}
function displayBoard(){
    var layout = document.getElementById("board").childNodes;
    layout.forEach(elem => {
        elem.className ="square";
        elem.addEventListener("click",clickedBox);
        elem.addEventListener("mouseover", mouseOver);
        elem.addEventListener("mouseout", mouseOut);
    });  
}
