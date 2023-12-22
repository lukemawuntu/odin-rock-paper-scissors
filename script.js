function getComputerChoice(){
  choice = ['rock','paper','scissor']
  return choice[Math.floor(Math.random()*3)]
}

console.log(getComputerChoice())