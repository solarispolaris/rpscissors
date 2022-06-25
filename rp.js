function playerSelection(){

}

function computerSelection(){

}

function getResults(playerI, computerI){
    let winner = "";
    let winningMove = "";
    let losingMove = "";

    //check players's input against computer's input with a simple switchcase

    if (playerI === computerI) return "Tied with a move of " + playerI; //if both inputs are the same, return tied result

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

    //return the result. If the winner string is empty, return an error
    if (winner === "") return "ERROR: Incorrect Input Recieved";
    
    //set the winning or losing move
    if (winner == "player"){
        winningMove = playerI;
        losingMove = computerI;
    }
    if (winner == "computer"){
        winningMove = computerI;
        losingMove = playerI;
    }

    return "The winner is the " + winner + " with a move of " + winningMove + " vs. " + losingMove;
}
