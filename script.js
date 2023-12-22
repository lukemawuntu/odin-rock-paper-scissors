function getComputerChoice(){
  choice = ['rock','paper','scissor']
  return choice[Math.floor(Math.random()*3)]
}

let winCounter = 0;
let loseCounter = 0;
function playRound(playerSelection, computerSelection){
  if (playerSelection=="rock" && computerSelection=="rock" ||
      playerSelection=="paper" && computerSelection=="paper" ||
      playerSelection=="scissor" && computerSelection=="scissor"){
    return "Tie";
  }
  else if (playerSelection=="rock" && computerSelection=="paper" ||
          playerSelection=="paper" && computerSelection=="scissor" ||
          playerSelection=="scissor" && computerSelection=="rock"){
    return loseCounter++;
  }
  else if (playerSelection=="rock" && computerSelection=="scissor" ||
          playerSelection=="paper" && computerSelection=="rock" ||
          playerSelection=="scissor" && computerSelection=="paper"){
    return winCounter++;
  }
}

function game(){
  let playerSelection = prompt("Choose rock paper scissor").toLowerCase();
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
  console.log(`You = ${playerSelection} || Computer = ${computerSelection}`)
  console.log(`Win = ${winCounter} || Lose = ${loseCounter}`)
}

while (true){
  game();
  if (winCounter==3 || loseCounter==3){
    break;
  }
}

(winCounter>loseCounter)
? console.log("You won! Reload to play again")
: console.log("You lost. Reload to play again.")