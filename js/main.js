//Pulls in parent div
let gameBoard = document.getElementById("boardGame");
let tileID = 0;

//array for all tile (spots on the board) locations
let tileLocations = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//array to hold symbols for players
let players = [(playerOne = "X"), (playerTwo = "O")];

let playerTurn = 0;

//displays the board on the screen
function loadUi() {
  //creates 3 rows for the board
  for (let i = 1; i < 4; i++) {
    let row = document.createElement("div");
    //adds classes to the rows
    row.classList.add("row", "justify-content-center");
    //creates 3 columns for each row
    for (let j = 1; j < 4; j++) {
      let tile = document.createElement("button");
      //gives div an id from tilesLocation array
      tile.setAttribute("id", tileLocations[tileID]);
      //increases tileID by 1
      tileID++;
      tile.classList.add(
        "border",
        "border-dark",
        "col",
        "pt-5",
        "pb-5",
        "col-3"
      );
      //adds event listener to buttons
      tile.addEventListener("click", switchTurns);
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
  restartbutton.addEventListener("click", function () {
    window.location.reload();
  });
  //adds button to the parent div
  gameBoard.appendChild(restartbutton);
}

//function to swap between players
function switchTurns(event) {
  //targets the tile that was clicked
  let clickedTile = event.target;
  //gets the symbol from players array
  let currentPlayer = players[playerTurn];
  //sets the text of the button to the player symbol
  clickedTile.textContent = currentPlayer;
  //makes an already clicked button unable to be clicked again
  clickedTile.disabled = true;
  //adds one to playerTurn making it go to the next symbol
  //when playerTurn exceeds the array length it wraps back to 0
  playerTurn = (playerTurn + 1) % players.length;
  console.log(playerTurn);
}

loadUi();