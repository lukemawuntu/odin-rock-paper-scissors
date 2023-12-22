function getComputerChoice(){
  choice = ['rock','paper','scissor']
  return choice[Math.floor(Math.random()*3)]
}

let playerSelection = prompt("Choose rock paper scissor").toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
  if (playerSelection=="rock" && computerSelection=="rock"){
    return "Tie";
  }
  else if (playerSelection=="rock" && computerSelection=="paper"){
    return "You lose";
  }
  else if (playerSelection=="rock" && computerSelection=="scissor"){
    return "You win";
  }
  if (playerSelection=="paper" && computerSelection=="rock"){
    return "You win";
  }
  else if (playerSelection=="paper" && computerSelection=="paper"){
    return "Tie";
  }
  else if (playerSelection=="paper" && computerSelection=="scissor"){
    return "You lose";
  }
  if (playerSelection=="scissor" && computerSelection=="rock"){
    return "You lose";
  }
  else if (playerSelection=="scissor" && computerSelection=="paper"){
    return "You win";
  }
  else if (playerSelection=="scissor" && computerSelection=="scissor"){
    return "Tie";
  }
}

console.log(playRound(playerSelection,computerSelection))