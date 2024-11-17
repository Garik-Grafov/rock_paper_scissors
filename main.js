let playerScore = 0;
let computerScore = 0;

const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const BILL = document.querySelector(".bill");
const outcome = document.querySelector(".outcome");

const computerPlay = () => {
  let arrOfChoises = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * arrOfChoises.length);
  return arrOfChoises[random];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    p.innerText = `You tied! You both picked ${playerSelection}`;
    outcome.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = `You lost! Paper covers rock`;
    outcome.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = `You won! Rock crushes scissors`;
    outcome.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = `You won! Paper covers rock`;
    outcome.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = `You lost! Scissors cuts paper`;
    outcome.appendChild(p);
  } else if (playerSelection == "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = `You won! Scissors cuts paper`;
    outcome.appendChild(p);
  } else if (playerSelection == "scissors" && computerSelection === "rock") {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = `You lost! Rock crushes scissors`;
    outcome.appendChild(p);
  }
};
ROCK.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

PAPER.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

SCISSORS.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
