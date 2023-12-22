function getComputerChoice(){
  choice = ['rock','paper','scissor']
  return choice[Math.floor(Math.random()*3)]
}

let winCounter = 0;
let loseCounter = 0;
function playRound(playerSelection, computerSelection){
  if (playerSelection=="rock" && computerSelection=="rock"){
    return "Tie";
  }
  else if (playerSelection=="rock" && computerSelection=="paper"){
    return loseCounter++;
  }
  else if (playerSelection=="rock" && computerSelection=="scissor"){
    return winCounter++;
  }
  else if (playerSelection=="paper" && computerSelection=="rock"){
    return winCounter++;
  }
  else if (playerSelection=="paper" && computerSelection=="paper"){
    return "Tie";
  }
  else if (playerSelection=="paper" && computerSelection=="scissor"){
    return loseCounter++;
  }
  else if (playerSelection=="scissor" && computerSelection=="rock"){
    return loseCounter++;
  }
  else if (playerSelection=="scissor" && computerSelection=="paper"){
    return winCounter++;
  }
   else if (playerSelection=="scissor" && computerSelection=="scissor"){
    return "Tie";
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
? console.log("You win!")
: console.log("You lose.")