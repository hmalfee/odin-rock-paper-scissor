const options = ["rock", "paper", "scissor"];
let getPlayerChoice, gameCount, playerScore, computerScore;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function play(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
    } else if (computerSelection === "scissor") {
      console.log("You Win! Rock beats Scissor");
      playerScore++;
    } else {
      console.log("It's a draw!");
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      console.log("You Win! Paper beats Rock");
      playerScore++;
    } else if (computerSelection === "scissor") {
      console.log("You Lose! Scissor beats Paper");
      computerScore++;
    } else {
      console.log("It's a draw!");
    }
  }

  if (playerSelection.toLowerCase() === "scissor") {
    if (computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissor");
      computerScore++;
    } else if (computerSelection === "paper") {
      console.log("You Win! Scissor beats Paper");
      playerScore++;
    } else {
      console.log("It's a draw!");
    }
  }
}

function game() {
  gameCount = 0;
  playerScore = 0;
  computerScore = 0;

  while (gameCount !== 5) {
    getPlayerChoice = prompt("Type rock, paper, or scissor: ");
    play(getPlayerChoice, getComputerChoice());
    gameCount++;
  }

  if (playerScore > computerScore) {
    console.log(playerScore, computerScore);
    console.log("Congratulations! You Win This Game!");
  } else if (computerScore > playerScore) {
    console.log(playerScore, computerScore);
    console.log("You Lost This Game!");
  } else {
    console.log(playerScore, computerScore);
    console.log("This game is a draw!");
  }
}

game();
