
window.addEventListener('load', start);


let player = '';
let choice = ['rock', 'paper', 'scissors'];

function start() {
  document.querySelector("#buttons > button.rock").addEventListener('click', clickRock);

  document.querySelector("#buttons > button.paper").addEventListener('click', clickPaper);

  document.querySelector("#buttons > button.scissors").addEventListener('click', clickScissors);
}

function clickRock() {

  document.querySelector('#player1').classList.remove('shake');
  document.querySelector('#player2').classList.remove('shake');
  void document.querySelector('#player1').offsetWidth;
  void document.querySelector('#player2').offsetWidth;

  document.querySelector('#player1').classList.add('shake');
  document.querySelector('#player2').classList.add('shake');

  document.querySelector('#player1').addEventListener('animationend', changeBg);

  function changeBg() {
    document.querySelector('#player1').setAttribute('style', 'background: url(hand_rock.png); background-position:center; background-size:cover;')
  }

  player = 'rock';
  console.log('user chose ', player);


  rememberUserChoice();
}



function clickPaper() {
  document.querySelector('#player1').classList.remove('shake');
  document.querySelector('#player2').classList.remove('shake');
  void document.querySelector('#player1').offsetWidth;
  void document.querySelector('#player2').offsetWidth;

  const hands = document.querySelector('#player1').classList.add('shake');
  const hands1 = document.querySelector('#player2').classList.add('shake');

  document.querySelector('#player1').addEventListener('animationend', changeBg);

  function changeBg() {
    document.querySelector('#player1').setAttribute('style', 'background: url(hand_paper.png); background-position:center; background-size:cover;')

  }

  player = 'paper';
  console.log('user chose ', player);
  rememberUserChoice();

}
function clickScissors() {
  document.querySelector('#player1').classList.remove('shake');
  document.querySelector('#player2').classList.remove('shake');
  void document.querySelector('#player1').offsetWidth;
  void document.querySelector('#player2').offsetWidth;

  const hands = document.querySelector('#player1').classList.add('shake');
  const hands1 = document.querySelector('#player2').classList.add('shake');

  document.querySelector('#player1').addEventListener('animationend', changeBg);

  function changeBg() {
    document.querySelector('#player1').setAttribute('style', 'background: url(hand_scissors.png); background-position:center; background-size:cover;')

  }

  player = 'scissors';
  console.log('user chose ', player);
  rememberUserChoice();
}

function rememberUserChoice() {


  RandomComputerChoice()
}

function RandomComputerChoice() {
  let machineChoise = Math.floor(Math.random() * choice.length);
  console.log('computer has chosen' + choice[machineChoise]);


  const machine = document.querySelector('#player2').addEventListener('animationend', changeBg)

  function changeBg() {
    if (choice[machineChoise] === 'paper') {
      document.querySelector('#player2').setAttribute('style', 'background: url(hand_paper.png); background-position:center; background-size:cover;');
    }
    else if (choice[machineChoise] === 'rock') {
      document.querySelector('#player2').setAttribute('style', 'background: url(hand_rock.png); background-position:center; background-size:cover;');
    }
    else {
      document.querySelector('#player2').setAttribute('style', 'background: url(hand_scissors.png); background-position:center; background-size:cover;');
    }





  }
  makeDecision(choice[machineChoise]);
}


function makeDecision(machineChoise) {
  //TODO: make actual decision here



  document.querySelector('#player1').addEventListener('animationend', changeBg);

  function changeBg() {
    setTimeout(() => {
      location.reload();
    }, 1500)
    let info = document.querySelector('#info');
    switch (true) {
      //rock
      case player === 'rock' && machineChoise === 'paper': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showLose()}`;

      case player === 'rock' && machineChoise === 'scissors': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showWin()}`;

      case player === 'rock' && machineChoise === 'rock': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showTie()}`;


      //paper
      case player === 'paper' && machineChoise === 'scissors': return ` ${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showLose()}`;

      case player === 'paper' && machineChoise === 'rock': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showWin()}`;

      case player === 'paper' && machineChoise === 'paper': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showTie()}`;


      //scissors
      case player === 'scissors' && machineChoise === 'rock': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showLose()}`;

      case player === 'scissors' && machineChoise === 'paper': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showWin()}`;

      case player === 'scissors' && machineChoise === 'scissors': return `${info.textContent = 'Computer chose' + " " + machineChoise
        } ${showTie()}`;

    }

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