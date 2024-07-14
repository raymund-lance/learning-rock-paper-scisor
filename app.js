var rock = "rock",
    paper = "paper",
    scissors = "scissors";
    computerScore = 0;
    playerScore = 0;
    description = "";

function getComputerChoice(computerAnswer){
    //random number for random computerAnswer
    let random = Math.floor(Math.random()*3) + 1;
    if (random === 1) {
        computerAnswer = rock;
    }
    else if (random === 2) {
        computerAnswer = paper;
    }
    else if (random === 3) {
        computerAnswer = scissors;
    }

    return computerAnswer;
}

function getPlayerChoice(playerAnswer) {
    //player prompt answer
    playerAnswer = prompt("Choose between 'rock, paper, and scissors'");
    return playerAnswer.toLowerCase();
    
}

function winner(humanChoice, computerChoice){
    let decision;
    // same choice = tie
    if(humanChoice == computerChoice) {
        decision = "It's a tie!!"
        description  = "";
    }
    //rock beats scissor
    else if( (humanChoice == "rock" && computerChoice == scissors) || (computerChoice == rock && humanChoice == "scissors") ){
        decision = "rock beats scissors!"
        if (humanChoice == "rock"){
            description = "Player wins! ";
        }
        else {
            description = "Computer wins! "
        }
    }
    // paper beats rock
    else if( (humanChoice == "paper" && computerChoice == rock) || (computerChoice == paper && humanChoice == "rock") ){
        decision = "paper beats rock!"
        if (humanChoice == "paper"){
            description = "Player wins! ";
        }
        else {
            description = "Computer wins! "
        }
    }
    // scissors beats paper
    else if( (humanChoice == "scissors" && computerChoice == paper) || (computerChoice == scissors && humanChoice == "paper") ){
        decision = "scissors beats paper!"
        if (humanChoice == "scissors"){
            description = "Player wins! ";
        }
        else {
            description = "Computer wins! "
        }
    }
    return description + decision;
}



function play() {
    //loop 5 times to have 5 rounds
    for(let round = 1; round <= 5; round++) {
        const humanChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log("Player: " + humanChoice);
        console.log("Computer: " + computerChoice);
        console.log(winner(humanChoice, computerChoice));

        if(description == "Player wins! ") {
            playerScore += 1;
        }
        else if(description == "Computer wins! ") {
            computerScore += 1;
        }
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
    if(playerScore > computerScore) {
        console.log("Player won the game!");
    }
    else if(playerScore === computerScore) {
        console.log("The game is tie!")
    }
    else{
        console.log("Computer won the game!")
    }
}

play();