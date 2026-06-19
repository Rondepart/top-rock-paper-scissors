let playerScore = 0;
let computerScore = 0;

document.querySelector("#choices").addEventListener("click", function(e) {
    if (!e.target.matches("button")) return;

    const playerChoice = e.target.value;
    playRound(playerChoice, getComputerChoice());
}) 

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

function getPlayerChoice() {
    let userInput = prompt("Enter Rock, Paper, or Scissors");
    return userInput;
}

function playRound(playerChoice, computerChoice) {
    // const playerChoice = playerChoice.toLowerCase().replace(/\s+/g, '');

    if (playerChoice === computerChoice){
        console.log("Tied you and the computer choiced " + computerChoice + ".");

    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        playerScore++;
        console.log("You win, computer choose Scissors.");

    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        console.log("You lose, computer choose Paper.");

    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        console.log("You lose, computer choose Scissors.");

    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerScore++;
        console.log("You win, computer choose Rock.");

    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        console.log("You lose, computer choose Rock.");

    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++;
        console.log("You win, computer choose Paper.");
    } else {
        console.log("You entered an invalid choice");
    }

    // return console.log(playerChoice + computerChoice);
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