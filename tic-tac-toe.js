window.onload = function (){displayBoard()}
function displayBoard(){
    var layout = document.getElementById("board").childNodes;
    layout.forEach(elem => {
        elem.className ="square";
    });  
}
