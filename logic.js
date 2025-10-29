

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    return Math.ceil((Math.random() * 100)) % 3;
}

function getHumanChoice() {
    let input = prompt("Please enter your choice: ");
    return input.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice == "rock") {
        switch(computerChoice) {
            case 0:
                console.log("Computer chose rock, its a tie!");
                break;
            case 1:
                console.log("Computer chose paper, you lost!");
                computerScore++;
                break;
            case 2:
                console.log("Computer chose scissors, you win!");
                humanScore++;        
                break;
        }
    }
    else if(humanChoice == "paper") {
        switch(computerChoice) {
            case 0:
                console.log("Computer chose rock, you win!");
                humanScore++;
                break;
            case 1:
                console.log("Computer chose paper, its a tie!");
                break;
            case 2:
                console.log("Computer chose scissors, you lost!");
                computerScore++;        
                break;
        }        
    }
    else if(humanChoice == "scissors") {
        switch(computerChoice) {
            case 0:
                console.log("Computer chose rock, you lost!");
                computerScore++;
                break;
            case 1:
                console.log("Computer chose paper, you won!");
                humanScore++;
                break;
            case 2:
                console.log("Computer chose scissors, its a tie!");
                break;
        }        
    }
}

console.log("----- Rock Paper Scissors - Best of 5 -----");

for(let i = 0; i < 5; i++) {
    console.log("Round " + i + " of 5:");

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
} 

console.log("Result: Player score: " + humanScore + ", computer score: " + computerScore);

if(humanScore > computerScore) {
    console.log("Congrats, you won!");
}
else if(humanScore < computerScore) {
    console.log("You lost, good luck next time!");
}
else {
    console.log("Its a tie!");
}

