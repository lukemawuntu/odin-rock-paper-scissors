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

function resultFunc(winCounter,loseCounter){
  if (winCounter>loseCounter) {
    result.textContent="You WON";
  } else{
    result.textContent="You LOST";
  }
}

function game(playerSelection){
  const computerSelection=getComputerChoice();
  if (winCounter<5 && loseCounter<5){
    playRound(playerSelection,computerSelection)
      text.textContent=`User Score: ${winCounter}, Computer Score: ${loseCounter}`
    } else{
      resultFunc(winCounter,loseCounter);
    }
}

const text = document.querySelector("#text")
const result = document.querySelector("#result")

let btnContainer = document.querySelector("#button-container")
btnContainer.addEventListener('click',(e)=>{
  let target = e.target;
  if (target.tagName=== 'BUTTON'){
    game(target.id);
  }
})
