// get dom's elements
const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const buttons = document.querySelectorAll("button");
console.log(ROCK, PAPER, SCISSORS);
// add div for bill view
let div = document.createElement("div");
div.className = "bill";
div.textContent = "test of new div";
document.body.append(div);

// function for get computer choice
function getComputerChoice() {
  let result = Math.random();
  if (result > 0 && result <= 0.33) {
    return "Rock";
  } else if (result > 0.33 && result <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// function for get user's choice
function getHumanChoice() {
}
getHumanChoice();
// // function for play
// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice.toLowerCase();
//   if (humanChoice === computerChoice) {
//     return "it's a draw!";
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     humanScore++;
//     return "You win! Rock beats scissors.";
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     computerScore++;
//     return "You lose! Paper beats rock.";
//   } else if (humanChoice === "paper" && computerChoice === "rock") {
//     humanScore++;
//     return "You win! Paper beats rock.";
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     computerScore++;
//     return "You lose! Scissors beats paper.";
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     humanScore++;
//     return "You win! Scissors beats paper.";
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     computerScore++;
//     return "You lose! Rock beats scissors.";
//   }
// }
// let humanScore = 0;
// let computerScore = 0;
// function playGame() {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   let result = playRound(humanSelection, computerSelection);
//   return result;
// }
// // let game = playGame();
// let test = function (game) {
//   for (let i = 1; i <= 5; i++) {
//     game;
//   }
// };
// // console.log(test(game), humanScore, computerScore);
