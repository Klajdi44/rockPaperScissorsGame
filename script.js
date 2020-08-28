//when loaded go to start function
window.addEventListener('load', start);

//initialise an empty variable
let player = '';
//make a variable  is an array that holds 3 values 
let choice = ['rock', 'paper', 'scissors'];

function start() {
  //add event listener to all 3 buttons.
  document.querySelector("#buttons > button.rock").addEventListener('click', clickRock);

  document.querySelector("#buttons > button.paper").addEventListener('click', clickPaper);

  document.querySelector("#buttons > button.scissors").addEventListener('click', clickScissors);
}

function clickRock() {
  //remove shake
  document.querySelector('#player1').classList.remove('shake');
  document.querySelector('#player2').classList.remove('shake');
  //similar to reload
  void document.querySelector('#player1').offsetWidth;
  void document.querySelector('#player2').offsetWidth;
  //re-add the animation shake
  document.querySelector('#player1').classList.add('shake');
  document.querySelector('#player2').classList.add('shake');
  // listen for an animation to end and run changeBg
  document.querySelector('#player1').addEventListener('animationend', changeBg);
  //function that changes the bg
  function changeBg() {
    document.querySelector('#player1').setAttribute('style', 'background: url(hand_rock.png); background-position:center; background-size:cover;')
  }
  //set the player to be = rock when rock is clicked
  player = 'rock';
  console.log('user chose ', player);


  rememberUserChoice();
}



function clickPaper() {
  //same as rock function
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
  //same as rock function
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
  //script for the machine to make a random choice. so machinechoise is equal to a random number from choice.length which is 3 and is an array so it will chose one of the values inside ['rock','paper','scissors'] (0,1,2);
  let machineChoice = Math.floor(Math.random() * choice.length);
  // im doing this choice[machineChoice] so i can get a value from the index of choise. if i didnt put choise in front of machineChoice then i would get 0,1,2 but then i wouldnt be able to do an if else with paper rock scissors since i need the name(i could do it with 0,1,2 but it would be harder to understand)
  console.log('computer has chosen' + " " + choice[machineChoice]);

  //get the machine and wait for animationend 
  const machine = document.querySelector('#player2').addEventListener('animationend', changeBg)
  //change bg based on the choise of the machine
  function changeBg() {
    if (choice[machineChoice] === 'paper') {
      document.querySelector('#player2').setAttribute('style', 'background: url(hand_paper.png); background-position:center; background-size:cover;');
    }
    else if (choice[machineChoice] === 'rock') {
      document.querySelector('#player2').setAttribute('style', 'background: url(hand_rock.png); background-position:center; background-size:cover;');
    }
    else {
      document.querySelector('#player2').setAttribute('style', 'background: url(hand_scissors.png); background-position:center; background-size:cover;');
    }





  }
  //pass the machineChoice to the function that makes a decision so it can have access to it.
  makeDecision(choice[machineChoice]);
}


function makeDecision(machineChoice) {
  //TODO: make actual decision here


  //  get player1 and wait for the animation to end.
  document.querySelector('#player1').addEventListener('animationend', changeBg);

  function changeBg() {
    //reload the page ever 1.5s so the whole game looks like it works.
    setTimeout(() => {
      location.reload();
    }, 1500);
    //get the h1 tthat displays the info that computer made.
    let info = document.querySelector('#info');
    //check if the below conditions are true then run whatever is inside
    switch (true) {
      //rock
      //player if player chose rock and machine paper then change the h1 to display the choice of machine and after that run function showLose() that will unhide the  lose image. rest below is the same
      case player === 'rock' && machineChoice === 'paper': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showLose()}`;

      case player === 'rock' && machineChoice === 'scissors': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showWin()}`;

      case player === 'rock' && machineChoice === 'rock': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showTie()}`;


      //paper
      case player === 'paper' && machineChoice === 'scissors': return ` ${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showLose()}`;

      case player === 'paper' && machineChoice === 'rock': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showWin()}`;

      case player === 'paper' && machineChoice === 'paper': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showTie()}`;


      //scissors
      case player === 'scissors' && machineChoice === 'rock': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showLose()}`;

      case player === 'scissors' && machineChoice === 'paper': return `${info.textContent = 'Computer chose' + " " + machineChoice
        } ${showWin()}`;

      case player === 'scissors' && machineChoice === 'scissors': return `${info.textContent = 'Computer chose' + " " + machineChoice
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