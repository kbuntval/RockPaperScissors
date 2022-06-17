let computerSelection, playerSelection, output, computerScore, playerScore;
computerScore = 0, playerScore = 0;

function computerPlay() {
    let RPS = ['rock', 'paper', 'scissors']
    return RPS[Math.floor(Math.random() * RPS.length)]
}

function singleRound(computerSelection) {
    playerSelection = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection.includes('rock') && computerSelection.includes('rock')) {
        return "It's a tie!";
    }
    else if (playerSelection.includes('rock') && computerSelection.includes('paper')) {
        return "You lose, Paper beats Rock!!";
    }
    else if (playerSelection.includes('rock') && computerSelection.includes('scissors')) {
        return "You win, Rock beats Scissors!";
    }
    else if (playerSelection.includes('paper') && computerSelection.includes('paper')) {
        return "It's a tie!"
    }
    else if (playerSelection.includes('paper') && computerSelection.includes('scissors')) {
        return "You lose, Scissors beat Paper!";
    }
    else if (playerSelection.includes('paper') && computerSelection.includes('rock')) {
        return "You win, Paper beats Rock!";
    }
    else if (playerSelection.includes('scissors') && computerSelection.includes('scissors')) {
        return "It's a tie!";
    }
    else if (playerSelection.includes('scissors') && computerSelection.includes('rock')) {
        return "You lose, Rock beats Scissors!";
    }
    else {
        return "You win, Scissors beats Paper";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        output = singleRound(computerSelection);
        console.log(output);
        if (output.includes('tie')) {
            playerScore++;
            computerScore++;
        } else if (output.includes('win')) {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log('Congratulations, you win!');
    } else if (computerScore > playerScore) {
        console.log('You lost this one, but you\'ll get them next time!');
    } else {
        console.log('It\'s a tie!');
    }
}

game();
console.log(playerScore, computerScore)
