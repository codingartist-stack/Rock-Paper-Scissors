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
            computerChoice = `Rock`;
            break;
        case 2:
            computerChoice = `Paper`;
            break;
        case 3:
            computerChoice = `Scissors`
    }

    console.log(`Computer choose: ` + computerChoice);
}

function playRound(playerSelection, computerChoice) {

    playerSelection = playerSelection.toLowerCase(); //made playerSelection case-insensitive

    if (playerSelection === computerChoice) {
        console.log(`It's a draw!`)
    }
    if (playerSelection === `rock` && computerChoice === `Paper`) {
        console.log(`You Lose! Paper beats Rock.`)
    }
    if (playerSelection === `rock` && computerChoice === `Scissors`) {
        console.log (`You Win! Rock beats Scissors.`)
    }
    if (playerSelection === `paper` && computerChoice === `Scissors`) {
        console.log (`You Lose! Scissors beats Paper.`)
    }
    if (playerSelection === `paper` && computerChoice === `Rock`) {
        console.log (`You Win! Paper beats Rock.`)
    }
    if (playerSelection === `scissors` && computerChoice === `Paper`) {
        console.log (`You Win! Scissors beats paper.`)
    }
    if (playerSelection === `scissors` && computerChoice === `Rock`) {
        console.log (`You Lose! Rock beats Scissors.`)
    }

}

console.log(`You Choose: ` + playerSelection)
getComputerChoice();
playRound(playerSelection, computerChoice);
