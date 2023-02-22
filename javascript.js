console.log("Welcome to Rock-Paper-Scissors")

const computerChoiceDisplay = document.getElementById('computer-choice')
const playerSelectionDisplay = document.getElementById('playerChoice')
const gameResultDisplay = document.getElementById('result')
const displayScore = document.getElementById('displayScore')
const displayComputerScore = document.getElementById('displayCompScore')

const possibleChoices = document.querySelectorAll('button')
let userChoice
// const playerScore = document.getElementById('displayScore')

let playerScore = 0;
let computerScore = 0;
let gameResult = ``;


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {

        userChoice = e.target.id;
        playerSelectionDisplay.innerHTML = userChoice;
        getComputerChoice();
        playRound(userChoice, computerChoice);

        if (gameResult === `You Win!`) {
            playerScore++
        }
        displayScore.innerHTML = playerScore;

        if (gameResult === `You Lose!`) {
            computerScore++
        }
        displayComputerScore.innerHTML = computerScore;

        if (playerScore === 5) {
            alert('You WON!!')
        }
        if (computerScore === 5) {
            alert('You LOST')
        }

}));



function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
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

    // console.log(`Computer choose: ` + computerChoice);
    computerChoiceDisplay.innerHTML = computerChoice;
};

function playRound(playerSelection, computerChoice) {

    playerSelection = playerSelection.toLowerCase(); //made playerSelection case-insensitive

    if (playerSelection === computerChoice) {
        gameResult = `It's a draw!`
    }
    if (playerSelection === `rock` && computerChoice === `paper`) {
        gameResult = `You Lose!`
    }
    if (playerSelection === `rock` && computerChoice === `scissors`) {
        gameResult = `You Win!`
    }
    if (playerSelection === `paper` && computerChoice === `scissors`) {
        gameResult = `You Lose!`
    }
    if (playerSelection === `paper` && computerChoice === `rock`) {
        gameResult = `You Win!`
    }
    if (playerSelection === `scissors` && computerChoice === `paper`) {
        gameResult = `You Win!`
    }
    if (playerSelection === `scissors` && computerChoice === `rock`) {
        gameResult = `You Lose!`
    }
// console.log(gameResult);
gameResultDisplay.innerHTML = gameResult;
}

function outOfFive(){
    for (let i = 0; i < 5; i++){
        // playerSelection = prompt(`Type rock, paper, scissors`);
        console.log(`You Choose: ` + playerSelection)
        getComputerChoice();
        playRound(playerSelection, computerChoice);
        
        if (gameResult === `You Win!`) {
            playerScore++;
        }
    }
    console.log(`You Won ` + playerScore + ` out of five.`);

}

// outOfFive();  => to play 5 rounds with alert

//ORIGNIAL ASSIGNMENT
//out of five
//if user wins + 1 to score 
//"you won " + display score + " out of 5"

//REVISIT ASSIGNMENT
//remove logic that plays five rounds
//create three buttons => add event listener to the buttons for playRound with the correct playerSelection
//add div for displaying results and change all of your console.logs into DOM methods
//display the running score out of 5, 