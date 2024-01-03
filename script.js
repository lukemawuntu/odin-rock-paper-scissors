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

const rock = document.querySelector("#rock")
rock.addEventListener('click',()=>{
  playerSelection='rock';
  computerSelection=getComputerChoice();
  playRound(playerSelection,computerSelection)
  console.log(playerSelection,computerSelection)
});

(winCounter>loseCounter)
? console.log("You won! Reload to play again")
: console.log("You lost. Reload to play again.")