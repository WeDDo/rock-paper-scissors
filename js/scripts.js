let choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";

function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "IT'S A DRAW";
    }
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" || computerSelection == "paper"){
        return "THE PLAYER WON!";
    }
    else{
        return "THE COMPUTER WON!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your selection(rock, paper, scissors): ").toLowerCase();
        computerSelection = computerPlay();
        if(choices.indexOf(playerSelection) != -1){
            console.log(playRound(playerSelection, computerSelection) + ` Player selected ${playerSelection} and the computer selected ${computerSelection}`);
        }
        else{
            console.log("Invalid input please enter either rock, paper or scissors");
            i = i - 1;
        }
    }
}

game();
