//Pulls in parent div
let gameBoard = document.getElementById("boardGame");
let tileID = 0;

//array for all tile (spots on the board) locations
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

//displays the board on the screen
function loadUi () {
    //creates 3 rows for the board
    for (let i = 1; i < 4; i++) {
        let row = document.createElement("div");
        //adds classes to the rows
        row.classList.add("row", "justify-content-center");
        //creates 3 columns for each row
        for (let i = 1; i < 4; i++) {
            let tile = document.createElement("div");
            //gives div an id from tilesLocation array
            tile.setAttribute("id", tileLocations[tileID]);
            //increases tileID by 1
            tileID++
            tile.classList.add("border", "border-dark", "col", "pt-5", "pb-5", "col-3");
            //makes the tiles on the board clickable
            tile.addEventListener('click', function () {
                tile.textContent = 'clicked';
            })
            //adds each column to the row
            row.appendChild(tile);
        }
    //adds each row to parent div
    gameBoard.appendChild(row);
    }
    
    //button to restart game
    let restartbutton = document.createElement("button");
    restartbutton.textContent = "Restart Game.";
    restartbutton.classList.add("mt-5");
    //when button is clicked it restarts the game
    restartbutton.addEventListener("click", function() {
        window.location.reload();
    })
    //adds button to the parent div
    gameBoard.appendChild(restartbutton);
}

loadUi();