let gameBoard = document.getElementById("boardGame");
let tileID = 0;

let tileLocations = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
]

function loadUi () {
    for (let i = 1; i < 4; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i < 4; i++) {
            let tile = document.createElement("div");
            tile.setAttribute("id", tileLocations[tileID]);
            tileID++
            tile.classList.add("border", "border-dark", "col", "pt-5", "pb-5", "col-3");
            row.appendChild(tile);
        }
    gameBoard.appendChild(row);
    }
    
    let restartbutton = document.createElement("button");
    restartbutton.textContent = "Restart Game.";
    restartbutton.classList.add("mt-5");
    restartbutton.addEventListener("click", function() {
        window.addEventListener("load", loadUi);
    })
    gameBoard.appendChild(restartbutton);
}

loadUi();