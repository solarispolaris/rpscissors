

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
    if (playerI === computerI) return "Tied with a move of " + playerI + " vs. " + playerI; 

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

function playGame(playerInput){

    console.log(getResults(playerInput, computerSelection())[0]);
   

}




