// ComputerPlay function
// We haven't learned about arrays yet but no idea how the hell else you would do this

const choices = ["rock", "paper", "scissors"]

// helper function to get a random integer between 1 and 3 I've nicked off ws3schools

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function computerPlay() {
    let index = getRndInteger(1, 3) - 1;
    return choices[index];
}

/*
Yep, console log test says that works
Rock Paper Scissors function
Needs to:
1) Say hi and prompt player for their choice
2) Get computer's choice
3) Evaluate which choice wins
4) Spit out an appropriate message to say who wins
Preeeeeetty sure these are all supposed to be separate helper functions
*/

function getPlayerChoice() {
    console.log("Let's play a game of rock, paper, scissors!");
    let playerChoice = prompt("Please choose rock, paper, or scissors.");
    // for extra credit I'm gonna check for garbage input here because first thing I would do
    // is enter a curse word and see what happens
    if (choices.indexOf(playerChoice) < 0) {
        getPlayerChoice();
        // yay for recursion so I don't need to figure out while loops in this ahead of time
    }
    else {
    return(playerChoice.toLowerCase());
    }
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
        console.log("It's a draw!");
        return 0;
    }
    else if (result === playerChoice) {
        console.log(`You win - ${playerChoice} beats ${computerChoice}!`);
        // can't have exclamation mark after 'You win' or lowercase variables become grammatically incorrect
        // there is a method for converting to title case on StackOverflow but this seems much easier
        return "player";
    }
    else {
        console.log(`You lose - ${computerChoice} beats ${playerChoice}!`);
        return "computer";
    }
}

function playRPS() {
    let playerChoice = getPlayerChoice();
    let computerChoice = computerPlay();
    return declareWinner(playerChoice, computerChoice);
}

/*
Game function
Needs to do a for loop to run playRPS 5 times
Needs to also keep score... how to do this?
"Feel free to re-work your previous functions if you need to. Specifically, you might
want to change the return value to something more useful."
Ye, let's change the returns in declareWinner to console.logs and make it return who won instead
Derr, also have to return declareWinner in the above function or none of this works
*/

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRPS();
        if (round === "player") {
            playerScore += 1;
        }
        else if (round === "computer") {
            computerScore +=1;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win ${playerScore}:${computerScore} vs the computer.`)
    }
    else if (computerScore > playerScore) {
        console.log(`You lose! The computer wins ${computerScore}:${playerScore}.`)
    }
    else {
        console.log('Aw, after 5 rounds, it\'s still a draw!')
        //Forgot a draw after 5 rounds is still possible when some of the rounds are a draw...
    }
}

game()

/* I would normally clean out some of these comments, but in the interest of showing my
work, I'll leave them there */