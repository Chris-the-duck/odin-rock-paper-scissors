// ComputerPlay function

const choices = ["rock", "paper", "scissors"]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function computerPlay() {
    let index = getRndInteger(1, 3) - 1;
    return choices[index];
}

// Query selectors and variables

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRPS(button.className);
    });
});

const resultText = document.querySelector('.result');
const scoreText = document.querySelector('.score');


// functions
// balls, I'm going to have to deconstruct game() and stuff it into the other functions now that there's no longer a loop

function getWinner(choiceA, choiceB) {
    if (choiceA === choiceB) {
        return 0;
    }
    else if (choiceA === "rock") {
        return (choiceB === "paper" ? choiceB : choiceA);
    }
    else if (choiceA === "paper") {
        return (choiceB === "scissors" ? choiceB : choiceA);
    }
    else {
        return (choiceB === "rock" ? choiceB : choiceA);
    }
}

function declareWinner(playerChoice, computerChoice) {
    let result = getWinner(playerChoice, computerChoice);
    if (!result) {
        resultText.textContent = "It's a draw!";
        return 0;
    }
    else if (result === playerChoice) {
        resultText.textContent = `You win - ${playerChoice} beats ${computerChoice}!`;
        // can't have exclamation mark after 'You win' or lowercase variables become grammatically incorrect
        // there is a method for converting to title case on StackOverflow but this seems much easier
        return "player";
    }
    else {
        resultText.textContent = `You lose - ${computerChoice} beats ${playerChoice}!`;
        return "computer";
    }
}

function playRPS(buttonInput) {
    let playerChoice = buttonInput;
    let computerChoice = computerPlay();
    let round = declareWinner(playerChoice, computerChoice);
    if (round === "player") {
        playerScore += 1;
    }
    else if (round === "computer") {
        computerScore +=1;
    }
    scoreText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
}

