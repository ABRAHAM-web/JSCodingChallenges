'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let guessedNumber;
let score = 20;
let highscore = 0;

document.querySelector('.highscore').value = 0;
document.querySelector('.guess').value = 0;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function() {
  guessedNumber = document.querySelector('.guess').value;
  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'No value was selected';
  } else {
    if (score > 1) {
        if (guessedNumber == secretNumber) {
          document.querySelector('.message').textContent = 'Correct Value';
          document.querySelector('body').style.backgroundColor = '#60b347';
          document.querySelector('.number').textContent = secretNumber;
        } else if (guessedNumber < secretNumber) {
          document.querySelector('.message').textContent = 'Too Low';
          score--;
          document.querySelector('.score').textContent = score;

        } else if ((guessedNumber > secretNumber) && (guessedNumber <= 20)) {
          document.querySelector('.message').textContent = 'Too High';
          score--;
          document.querySelector('.score').textContent = score;
        } else if (guessedNumber > 20) {
          document.querySelector('.message').textContent = 'illegan value';
          //score--;
          //document.querySelector('.score').textContent = score;

      }

    } else {
      document.querySelector('.message').textContent = 'You have lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  };
});

document.querySelector('.again').addEventListener('click', function (){
      secretNumber = Math.trunc(Math.random()*20)+1;
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = 0;

        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.score').textContent = '20';

      score = 20;
});
