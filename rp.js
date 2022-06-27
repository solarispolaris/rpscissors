//global values for RPS game progress
let winsPlayer = 0;
let winsComputer = 0;
let currentRound = 1;
let maxWins = 5;


//return getResults(playerInput, computerSelection());
function getButtonInfo(e){
    const attackKey = e.target.getAttribute("data-attack");
    progressGame(getResults(attackKey, computerSelection()));
}

function computerSelection(){

    //get a random number from 0 to 99
    let randomNum = Math.round(Math.random()*100);

   if (randomNum >= 66) return "rock";
   if (randomNum >= 33 && randomNum <= 66) return "paper";
   return "scissors";

}

function getResults(playerI, computerI){

    let winner = "";
    let winningMove = "";
    let losingMove = "";
    //array for storing the return results
    const result = [];

    //if both inputs are the same, return tied result
    if (playerI === computerI){
        result[0] = "Tied!";
        result[1] = "Tied"
        return  result;
    } 

     //check players's input against computer's input with a simple switchcase
    switch (playerI){
        case "rock":
            switch (computerI){
                case "scissors":
                    winner = "player";
                    break;
                case "paper":
                    winner = "computer";
                    break;
            }
            break;
        case "scissors":
            switch (computerI){
                case "rock":
                    winner = "computer";
                    break;
                case "paper":
                    winner = "player";
                    break;
            }
            break;
        case "paper":
            switch (computerI){
                case "rock":
                    winner = "player";
                    break;
                case "scissors":
                    winner = "computer";
                    break;
            }
            break;
    }

    //if the winner string is empty, return an error
    if (winner === "") return "ERROR: Incorrect Input Recieved";
    
    //set the winning or losing move
    if (winner == "player"){
        winningMove = playerI;
        losingMove = computerI;
    }
    else {
        winningMove = computerI;
        losingMove = playerI;
    }

    //store the results 
    result[0] = "The winner is the " + winner + " with a move of " + winningMove + " vs. " + losingMove;
    result[1] = winner;

    //return the result array
    return result;
}

function progressGame(result){
    
    const roundElement = document.querySelector(".round-info");
    const playerWinsElement = document.querySelector(".wins-player");
    const computerWinsElement = document.querySelector(".wins-computer");
    const gameResultsElement = document.querySelector(".game-results");

    //increase the round number
    currentRound++;
    //check the winner of the round and increase their scores
    switch(result[1]){
        case "player":
            winsPlayer++;
            break;
        case "computer":
            winsComputer++;
    }

    //Update the text pertaining for the results
    roundElement.textContent = `Round: ${currentRound}`;
    playerWinsElement.textContent = `Player: ${winsPlayer}`;
    computerWinsElement.textContent = `Computer: ${winsComputer}`;
    if(winsPlayer < maxWins && winsComputer < maxWins) gameResultsElement.textContent = result[0];
    else{
        let winner = (winsPlayer > winsComputer) ? "Player" : "Computer";
        gameResultsElement.textContent = "The Winner of the Entire Match is the " + winner + "!!!";
        endGame();
    }

}

function newGame(){
    const buttonList = document.querySelectorAll(".game-button");
    buttonList.forEach((btn) => {btn.addEventListener('click', getButtonInfo)});
    restartGame();
   
}

function restartGame(){
    //sets all variables to the initial state
    currentRound = 0;
    winsPlayer = 0;
    winsComputer = 0;
    //gives default values to update the game state
    progressGame(["", "RESTART"]);
}

function endGame(){
    const gameBtn = document.querySelector(".begin-game");
    const buttonList = document.querySelectorAll(".game-button");
    //initialize
    gameBtn.textContent = "New Game";
    //remove the button listeners
    buttonList.forEach((btn) => {btn.removeEventListener("click", getButtonInfo)});

}
    






