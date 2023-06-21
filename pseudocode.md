<!-- 
MoSCow

Must have:
1. 2 spots for players
2. Places to put "X" and "O"
3. Board to display it all
4. Restart button

Should have:
1. Place to keep score
2. Show which players turn it is

Could have:
1. Pick which symbol you start with
-->
<!--
MAKE SURE TO USE VERB-NOUN (ACTION-OBJ) NAMES FOR FUNCTIONS
-->

# INIT 

## Notes/Questions:

>How to get board to display??

>How to mark down a tile with a symbol (possibly use increments)

>How to tell who wins or if it is a tie

>How to tell whose turn it is/which symbol to use

>How to keep track of moves made

>Show who's turn it is

## PROCEDURES:

There are 2 players (X and O)

A 9 square board will appear

Players will take turns placing their symbols (X and O) on the board

To win you need to get 3 of your symbols in a row

There are 8 ways to win in tictactoe
1. 3 vertically 
2. 3 diagonally 
4. 2 horizontally

If the board fills up (the ninth move is made) the game ends in a tie

Once the game has ended it will display the winning player, or if it is a tie

The game can be reset by a button at the bottom of the board

## Steps:
1. User travels to site
2. empty board displays on screen
3. when a tile is clicked it is marked with the correct symbol
4. check if 3 symbols are in a row
    * IF there are 3 symbols in a row display winner
    * ELSE IF there are 9 total moves made display draw
    * ELSE continue game
5. repeat step 4 until winner or draw
6. restart button is hit and starts a fresh game

## PROGRAM START:
LOAD BOARD

DISPLAY CORRECT SYMBOLS WHEN TILE IS CLICKED

CHECK IF THERE IS A WINNER OR TIE AFTER EACH MOVE

DISPLAY OUTCOME OF GAME

RESTART GAME
## PROGRAM END.

## ATMOIC DESGIN:

# ATOMS:
* TicTacToe heading name
* Tile buttons
* Display for whose turn it is
* Display for winner/tie game
* Reset button for new game

# MOLECULES:
* Footer containing whose turn, winner/tie game, and reset button
* Game board and header

# ORAGANISM:
* Entire functioning site

# FUNCTIONAL:
```
players = [
    PLAYERONE = "X"
    PLAYERTWO = "O"
]

//NEED TO LOOK INTO HOW TO ACTUALLY IMPLEMENT THIS
boardLocations = [
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

winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

loadUI () {
    //loads board
    //gives each tile a number/marking to make it individual
    //loads restart button and holds restart function
    //calls in whoseTurn
    //calls in winOrTie
}

switchTurn () {
    //shows whose turn it is
    //displays where the user clicked
    //keeps track of clicked tiles
    //changes whose turn it is and runs again
}

checkWinTie () {
    //checks all 8 ways game can be won
    //checks if there is 3 "X" or "O" in a row
    //IF 3 in a row, displays winner
    //ELSE IF moves equal 9, display tie
    //ELSE continue game
}
```
<!--
      |     |     
   0  |  1  |  2  
 _____|_____|_____
      |     |     
   3  |  4  |  5  
 _____|_____|_____
      |     |     
   6  |  7  |  8  
      |     | 
THIS IS WHAT THE BOARD SHOULD CLOSELY RESEMBLE
-->