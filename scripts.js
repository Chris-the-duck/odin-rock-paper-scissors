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
        button.id = 'clicked'; // shamelessly nicking that border transform from the Wes Bos thing, but can't use class name
    });
});
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
// WIP - this does not work yet

const resultText = document.querySelector('.result');
const scoreText = document.querySelector('.score');
const computer = document.querySelector('.computer');

const rockPic = "images/rock.jpg";
const paperPic = "images/paper.jpg";
const scissorPic = "images/scissors.jpg";


// functions
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if not a transform
    this.removeAttribute('id');
}

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
        resultText.classList.remove('win', 'lose')
        resultText.textContent = "It's a draw!";
        return 0;
    }
    else if (result === playerChoice) {
        resultText.classList.add('win');
        resultText.classList.remove('lose');
        resultText.textContent = `You win - ${playerChoice} beats ${computerChoice}!`;
        return "player";
    }
    else {
        resultText.classList.add('lose');
        resultText.classList.remove('win');
        resultText.textContent = `You lose - ${computerChoice} beats ${playerChoice}!`;
        return "computer";
    }
}

function changeImage(newImg) {
    document.getElementById("compImg").src = newImg;
}

function playRPS(buttonInput) {
    let playerChoice = buttonInput;
    let computerChoice = computerPlay();
    computer.textContent = "Computer plays: ";
    let newImg = (computerChoice == "rock") ? rockPic : (computerChoice == "scissors") ? scissorPic : paperPic;
    changeImage(newImg);
    let round = declareWinner(playerChoice, computerChoice);
    if (round === "player") {
        playerScore += 1;
    }
    else if (round === "computer") {
        computerScore +=1;
    }
    scoreText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
}

