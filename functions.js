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
//output of getComputerChoice function
let computerStorage = getComputerChoice();
computerView.textContent = computerStorage;
computerAi.appendChild(computerView);
console.log(computerStorage);



const selectPlayer = document.querySelector("#player");

for(let i = 0; i < 3; i++) {
    let createButton = document.createElement("button");
    if(i == 0) {
        createButton.id = "rock";
        createButton.classList.add("button-pick");
        createButton.textContent = rock;
        
    } else if(i == 1) {
        createButton.id = "paper";
        createButton.classList.add("button-pick");
        createButton.textContent = paper;
    } else if(i == 2) {
        createButton.id = "scissor";
        createButton.classList.add("button-pick");
        createButton.textContent = scissor;
    }
    selectPlayer.appendChild(createButton);
}

let playerPick = "";
let selectButtonRock = document.querySelector("#rock");
selectButtonRock.addEventListener("click", () => {
    playerPick = rock;
});

let selectButtonPaper = document.querySelector("#paper");
selectButtonPaper.addEventListener("click", () => {
    playerPick = paper;
});

let selectButtonScissor = document.querySelector("#scissor");
selectButtonScissor.addEventListener("click", () => {
    playerPick = scissor;
});

let playerStorage = playerPick;
console.log(playerStorage);



