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
