// Function to create and append a button
function createButton(choice) {
    const button = document.createElement('button');
    button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
    button.onclick = () => playGame(choice);
    document.querySelector('#buttons').appendChild(button);
}

// Create buttons for rock, paper, and scissors
['rock', 'paper', 'scissors'].forEach(choice => createButton(choice));

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    document.querySelector('#winner').textContent = result;
}