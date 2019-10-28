let choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

let buttons = Array.from(document.querySelectorAll(".selection"));
buttons.forEach(button => button.addEventListener("click", playRound));

let playerScoreDiv = document.querySelector("#player-score");
let computerScoreDiv = document.querySelector("#computer-score");
let result = document.querySelector("#round-result");

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    playerSelection = e.target.value;
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        result.textContent = "It's a draw!";
        return;
    }
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        result.textContent = "The player won!";
        playerScore++;
        playerScoreDiv.textContent = playerScore;
        if(playerScore == 5){
            result.textContent = "GAME OVER! The player won!"
        }
        return;
    }
    else {
        result.textContent = "The computer won!";
        computerScore++;
        computerScoreDiv.textContent = computerScore;
        if(computerScore == 5){
            result.textContent = "GAME OVER! The computer won!"
        }
        return;
    }
}