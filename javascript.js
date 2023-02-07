console.log("Welcome to Rock-Paper-Scissors")

//Computer choose between rock, paper, or scissors
//user chooses between rock, paper, or Scissors and make it case-insensitive

// if computer choice and user choice match,  it's a draw
// if computer chooses rock and user chooses paper, User wins
// if computer chooses rock and user chooses scissors, User loses
// if computer chooses paper and user chooses scissors, User wins
// if computer chooses paper and user chooses rock, User loses
// if computer chooses scissors and user chooses paper, User loses
// if computer chooses scissors and user chooses rock, User wins

//result of the round displayed in console.

let computerChoice
let playerSelection = `RocK`
let gameResult

console.log(`You Choose: ` + playerSelection)
getComputerChoice();
playRound(playerSelection, computerChoice);

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

        //console.log(randomNumber);
        //using if
        //if (randomNumber === 1) {
            //computerChoice = `Rock`
        // } 
        //if (randomNumber === 2) {
            //computerChoice = `Paper`
        //}
        //if (randomNumber === 3) {
            //computerChoice = `Scissors`
        //}

    //using swtich - I just wanted to see of I could do it in switch
    switch (randomNumber) {
        case 1: 
            computerChoice = `rock`;
            break;
        case 2:
            computerChoice = `paper`;
            break;
        case 3:
            computerChoice = `scissors`
    }

    console.log(`Computer choose: ` + computerChoice);
}

function playRound(playerSelection, computerChoice) {

    playerSelection = playerSelection.toLowerCase(); //made playerSelection case-insensitive

    if (playerSelection === computerChoice) {
        gameResult = `It's a draw!`
    }
    if (playerSelection === `rock` && computerChoice === `paper`) {
        gameResult = `You Lose! Paper beats Rock.`
    }
    if (playerSelection === `rock` && computerChoice === `scissors`) {
        gameResult = `You Win! Rock beats Scissors.`
    }
    if (playerSelection === `paper` && computerChoice === `scissors`) {
        gameResult = `You Lose! Scissors beats Paper.`
    }
    if (playerSelection === `paper` && computerChoice === `rock`) {
        gameResult = `You Win! Paper beats Rock.`
    }
    if (playerSelection === `scissors` && computerChoice === `paper`) {
        gameResult = `You Win! Scissors beats paper.`
    }
    if (playerSelection === `scissors` && computerChoice === `rock`) {
        gameResult = `You Lose! Rock beats Scissors.`
    }
console.log(gameResult);
}


