let playerScore = 0;
let computerScore = 0;

document.querySelector("#choices").addEventListener("click", function(e) {
    if (!e.target.matches("button")) return;

    const playerChoice = e.target.value;
    playRound(playerChoice, getComputerChoice());
}) 

const gameResult = document.querySelector("#result");
const scoreBoard = document.querySelector("#score");

function getComputerChoice() {
    let rndmNum = Math.floor(Math.random() * 3) + 1;

    if (rndmNum === 1) {
        return "Rock";
    } else if (rndmNum === 2) {
        return "Paper";
    } else if (rndmNum === 3) {
        return "Scissors";
    }
}

// function getPlayerChoice() {
//     let userInput = prompt("Enter Rock, Paper, or Scissors");
//     return userInput;
// }

function playRound(playerChoice, computerChoice) {
    // const playerChoice = playerChoice.toLowerCase().replace(/\s+/g, '');

    if (playerChoice === computerChoice){
        gameResult.textContent = "Tied you and the computer choiced " + computerChoice + ".";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        playerScore++;
        gameResult.textContent = "You win, computer choose Scissors.";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        gameResult.textContent = "You lose, computer choose Paper.";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        gameResult.textContent = "You lose, computer choose Scissors.";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerScore++;
        gameResult.textContent = "You win, computer choose Rock.";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        gameResult.textContent = "You lose, computer choose Rock.";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;

    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++;
        gameResult.textContent = "You win, computer choose Paper.";
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
    } else {
        console.log("You entered an invalid choice");
        scoreBoard.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
    }
} 

function playGame() {
    // for (let roundCount = 0; roundCount<5; roundCount++) {
    //     const humanSelection = getPlayerChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }
        
    if (playerScore === computerScore) {
        console.log("Tie!!! you scored: " + playerScore + " | Computer Scored: " + computerScore);

    } else if (playerScore < computerScore) {
        console.log("GGWP You lost you scored: " + playerScore + " | Computer Scored: " + computerScore);

    } else {
        console.log("GGWP You win you scored: " + playerScore + " | Computer Scored: " + computerScore);
    }

    playerScore = 0;
    computerScore = 0;
}


playGame();