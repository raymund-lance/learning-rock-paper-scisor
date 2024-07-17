var rock = "rock",
    paper = "paper",
    scissor = "scissors",
    computerScore = 0,
    playerScore = 0,
    description = "";

const computerAi = document.querySelector("#computer");
const computerView = document.createElement("div");
computerView.classList.add("computer-visual");

function getComputerChoice(computerAnswer){
    //random number for random computerAnswer
    let random = Math.floor(Math.random()*3) + 1;
    switch(random) {
        case 1:
            computerAnswer = rock;
            break;
        case 2:
            computerAnswer = paper;
            break;
        case 3:
            computerAnswer = scissor;
            break;
    }

    return computerAnswer;
}
let computerStorage = getComputerChoice();
computerView.textContent = computerStorage;
computerAi.appendChild(computerView);

const playerContainer = document.querySelector("#player");


for(let i = 0; i < 3; i++) {
    const playerPick = document.createElement("button");
    playerPick.classList.add("player-pick");
    let buttonName = "";
    switch(i) {
        case 0:
            buttonName = rock;
            break;
        case 1:
            buttonName = paper;
            break;
        case 2:
            buttonName = scissor;
    }
    playerPick.textContent = buttonName;
    playerContainer.appendChild(playerPick);
}





