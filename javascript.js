console.log("Welcome to Rock-Paper-Scissors")

//Computer choose between rock, paper, or scissors
//user chooses between rock, paper, or Scissors and make it case-insensitive

// if computer chooses rock and user chooses rock,  it's a draw
// if computer chooses rock and user chooses paper, User wins
// if computer chooses rock and user chooses scissors, User loses
// if computer chooses paper and user chooses paper, it's a draw
// if computer chooses paper and user chooses scissors, User wins
// if computer chooses paper and user chooses rock, User loses
// if computer chooses scissors and user chooses scissors, it's a draw
// if computer chooses scissors and user chooses paper, User loses
// if computer chooses scissors and user chooses rock, User wins

//result of the match are displayed in console.

let ComputerChoice 

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    console.log(randomNumber);

    if (randomNumber === 1) {
        ComputerChoice = `Rock`
    } 
    if (randomNumber === 2) {
        ComputerChoice = `Paper`
    }
    if (randomNumber === 3) {
        ComputerChoice = `Scissors`
    }
}

