let gameBoard = document.getElementById("boardGame");

function loadUi () {
    for (let i = 1; i < 4; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i < 4; i++) {
            let tile = document.createElement("div");
            tile.classList.add("border", "border-dark", "col", "pt-5", "pb-5", "col-3");
            row.appendChild(tile);
        }
    gameBoard.appendChild(row);
    }
    
    let restartbutton = document.createElement("button");
    restartbutton.textContent = "Restart Game.";
    restartbutton.classList.add("mt-5");
    restartbutton.addEventListener("click", function() {
        window.location.reload();
        loadUi();
    })
    gameBoard.appendChild(restartbutton);
}

loadUi();