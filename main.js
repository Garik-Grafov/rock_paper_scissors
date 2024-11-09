let humanScore = 0;
let computerScore = 0;
// function for get computer choice
function getComputerChoice() {
  let result = Math.random();
  if (result > 0 && result <= 0.33) {
    return "rock";
  } else if (result > 0.33 && result <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
// function for get user's choice
function getHumanChoice() {
  let result = prompt();
  return result;
}
// function for play
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "scissor") {
    return computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
