




function playerSelection(){

    let playerInput;

    //continue loop until player inputs the correct values
    while (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors"){

        playerInput = prompt("Rock, Paper, Scissors. Please Chose One: ");
        if (playerInput == null) continue;
        playerInput = playerInput.toLowerCase();

        //shorthand commands to simplify input
        switch (playerInput){
            case "r":
                playerInput = "rock";
                break;
            case "p":
                playerInput = "paper";
                break;
            case "s":
                playerInput = "scissors";
        }
    }

    return playerInput;
    


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

function playGame(){
    let maxRound = 0;
    let results = [];
    let winsComputer = 0;
    let winsPlayer = 0;
    let winner = "";
    

    //continues input prompt until input is between 0 and 101
    while (maxRound <= 0 || maxRound > 100 || !Number.isInteger(parseInt(maxRound))){
        maxRound = prompt("Input Number of Rounds to be Played (Max is 100)");
    }

    //loop for the number of rounds input
    for(let i = 0; i < maxRound; i++){
        console.log("Round " + (i+1));
        results = getResults(playerSelection(), computerSelection());

        //increase the winner count of the player/computer side
        if(results[1] === "player") winsPlayer++;
        else winsComputer++;

        console.log(results[0]);
    }

    //display the winner of the match

    console.log("Computer: " + winsComputer);
    console.log("Player: " + winsPlayer);
    if (winsComputer === winsPlayer) console.log("No One Wins! THe game is tied.");
    else{
        if (winsComputer > winsPlayer) winner = "computer. Too Bad!";
        else winner = "player. Congrats!";
       
        console.log("The winner is the " + winner);
    }


}


