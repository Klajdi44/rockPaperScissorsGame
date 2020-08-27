
window.addEventListener('load', start);


let player = '';
let choice = ['rock', 'paper', 'scissors'];

function start() {
  document.querySelector("#buttons > button.rock").addEventListener('click', clickRock);

  document.querySelector("#buttons > button.paper").addEventListener('click', clickPaper);

  document.querySelector("#buttons > button.scissors").addEventListener('click', clickScissors);
}

function clickRock() {
  const hands = document.querySelector('#player1').classList.add('shake');

  const hands1 = document.querySelector('#player2').classList.add('shake');

  player = 'rock';
  console.log('user chose', player);

  rememberUserChoice();
}



function clickPaper() {
  const hands = document.querySelector('#player1').classList.add('shake');
  const hands1 = document.querySelector('#player2').classList.add('shake');

  player = 'paper';
  console.log(player);
  rememberUserChoice();

}
function clickScissors() {
  const hands = document.querySelector('#player1').classList.add('shake');
  const hands1 = document.querySelector('#player2').classList.add('shake');

  player = 'scissors';
  console.log(player);
  rememberUserChoice();
}

function rememberUserChoice() {


  RandomComputerChoice()
}

function RandomComputerChoice() {
  let machineChoise = Math.floor(Math.random() * choice.length);
  console.log('computer has chosen' + choice[machineChoise]);

  makeDecision(choice[machineChoise]);
}


function makeDecision(machineChoise) {
  //TODO: make actual decision here
  let info = document.querySelector('#info');
  switch (true) {
    //rock
    case player === 'rock' && machineChoise === 'paper': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showLose()}`;
    case player === 'rock' && machineChoise === 'scissors': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showWin()}`;
    case player === 'rock' && machineChoise === 'rock': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showTie()}`;


    //paper
    case player === 'paper' && machineChoise === 'scissors': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showLose()}`;
    case player === 'paper' && machineChoise === 'rock': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showWin()}`;
    case player === 'paper' && machineChoise === 'paper': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showTie()}`;


    //scissors
    case player === 'scissors' && machineChoise === 'rock': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showLose()}`;
    case player === 'scissors' && machineChoise === 'paper': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showWin()}`;
    case player === 'scissors' && machineChoise === 'scissors': return `${showLose}
    ${ info.textContent = 'Computer chose' + " " + machineChoise
      } ${showTie()}`;

  }




}

function showWin() {

  document.querySelector('#win').classList.remove('hidden');


}

function showTie() {

  document.querySelector('#draw').classList.remove('hidden');
}

function showLose() {
  document.querySelector('#lose').classList.remove('hidden');

}