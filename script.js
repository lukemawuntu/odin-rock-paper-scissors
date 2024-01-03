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

//if statement execute when counter<5
//if counter=5 stop.
//condition = true;
//if (counter<5), condition = true
//else condition=false

// function gameConditions(winCounter,loseCounter){
//   if (winCounter<5 && loseCounter<5){
//     return true;
//   } else{
//     return false;
//   }
// }

function resultFunc(winCounter,loseCounter){
  if (winCounter>loseCounter) {
    result.textContent="You WON";
  } else{
    result.textContent="You LOST";
  }
}

function playRock(){
  playerSelection='rock';
  computerSelection=getComputerChoice();
  let gameCondition=false;
  if (winCounter<5 && loseCounter<5){
    gameCondition = true;
  }
  if (gameCondition==true){
  playRound(playerSelection,computerSelection)
    text.textContent=`User Score: ${winCounter}, Computer Score: ${loseCounter}`
  }else{
    resultFunc(winCounter,loseCounter);
  }
}

function playPaper(){
  playerSelection='paper';
  computerSelection=getComputerChoice();
  let gameCondition=false;
  if (winCounter<5 && loseCounter<5){
    gameCondition = true;
  }
  if (gameCondition==true){
  playRound(playerSelection,computerSelection)
    text.textContent=`User Score: ${winCounter}, Computer Score: ${loseCounter}`
  }else{
    resultFunc(winCounter,loseCounter);
  }
}

function playScissor(){
  playerSelection='scissor';
  computerSelection=getComputerChoice();
  let gameCondition=false;
  if (winCounter<5 && loseCounter<5){
    gameCondition = true;
  }
  if (gameCondition==true){
  playRound(playerSelection,computerSelection)
    text.textContent=`User Score: ${winCounter}, Computer Score: ${loseCounter}`
  } else{
    resultFunc(winCounter,loseCounter);
  }
}


const text = document.querySelector("#text")
const result = document.querySelector("#result")

const rock = document.querySelector("#rock")
rock.addEventListener('click', playRock);

const paper = document.querySelector("#paper")
paper.addEventListener('click', playPaper);

const scissor = document.querySelector("#scissor")
scissor.addEventListener('click', playScissor);