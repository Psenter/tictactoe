//Pulls in parent div
let gameBoard = document.getElementById("boardGame");
let tileID = 0;

//array for all tile (spots on the board) locations
let tileLocations = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//array to hold symbols for players
let players = [(playerOne = "X"), (playerTwo = "O")];

//array to hold all win combos
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let playerTurn = 0;

//displays the board on the screen
function loadUi() {
  
  //Adds title to the page
  let title = document.createElement("h1");
  title.classList.add("pb-3")
  title.textContent = "TicTacToe!";
  gameBoard.appendChild(title);

  //Adds winner or tie text to screen
  let winner = document.createElement("h2");
  winner.setAttribute("id", "winner");
  winner.classList.add("pb-3")
  gameBoard.appendChild(winner);

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
        "little-padding",
        "col-2"
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

  //everytime a turn is taken it calls in the function
  checkWinTie(currentPlayer);
}

function checkWinTie(currentPlayer) {
  
  //gets the winner h2 element from DOM
  let playerWin = document.getElementById("winner");
  
  //checks for winning combinations
  for (let i = 0; i < winConditions.length; i++) {
    
    //sets [a, b, c] to the combinations from the winConditions array
    const [a, b, c] = winConditions[i];
    
    //gets the buttons made from loadUi and sets them equal to each tile
    const tileA = document.getElementById(tileLocations[a]);
    const tileB = document.getElementById(tileLocations[b]);
    const tileC = document.getElementById(tileLocations[c]);

    //checks if one of the winning combos has happened
    //takes current player from switchTurn function
    if (tileA.textContent === currentPlayer && tileB.textContent === currentPlayer && tileC.textContent === currentPlayer) {
     
      //changes the text of winner h2 element
      playerWin.textContent = currentPlayer + " is the winner!";

      return;
    }
  }

  //method to check if all tiles have been filled by a symbol
  //goes over every tile in the tileLocations array
  const allTilesFilled = tileLocations.every((tile) => {
    
    //gets corresponding element from DOM
    const currentTile = document.getElementById(tile);
    
    //checks if tile doesnt have empty string
    //returns if the statement is true or false 
    return currentTile.textContent !== "";
  });

  //if allTilesFilled returns true says its a tie
  if (allTilesFilled) {
    
    //changes the text of winner h2 element
    playerWin.textContent = "The game is a tie!";
  }
}

loadUi();