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

# INIT 

## Notes/Questions

>How to get board to display??

>How to mark down a tile with a symbol (possibly use increments)

>How to tell who wins or if it is a tie

>How to tell whos turn it is/which symbol to use

>How to keep track of moves made

>Show who's turn it is

## Steps
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

# PROCEDURAL:
```
players = [
    PLAYERONE = "X"
    PLAYERTWO = "O"
]

//NEED TO LOOK INTO HOW TO ACTUALLY IMPLEMENT THIS
boardLocations = [
    {
        A1, A2, A3
    }
    {
        B1, B2, B3
    }
    {
        C1, C2, C3
    }
]

loadUI () {
    //loads board
    //gives each tile a number/marking to make it individual
    //loads restart button and holds restart function
    //calls in whosTurn
    //calls in winOrTie
}

whosTurn () {
    //shows whos turn it is
    //displays where the user clicked
    //keeps track of clicked tiles
    //changes whos turn it is and runs again
}

winOrTie () {
    //checks all 8 ways game can be won
    //checks if there is 3 "X" or "O" in a row
    //IF 3 in a row, displays winner
    //ELSE IF moves equal 9, display tie
    //ELSE continue game
}
```