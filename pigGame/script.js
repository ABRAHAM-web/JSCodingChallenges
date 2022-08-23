'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
//const currentScore1 = document.querySelector('#current--1');
//const currentScore2 = document.querySelector('#current--2');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  console.log(`dice-${dice}.png`);

  if(dice !== 1) {
    //Ass current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    // player0El.classList.add('player--active');
    // player1El.classList.remove('player--active');
    if(activePlayer === 0) {
      if ((currentScore + score0El) > 100) {
        document.querySelector(`player--${activePlayer}`).classList.toggle('player--winner');
      }
      let totScore = currentScore + score0El;
      console.log(`Total player 0 score = ${totScore}`);
      console.log(`Total player 0 score = ${currentScore}`);
      console.log(`Total player 0 score = ${score0El}`);
    } else {
      if ((currentScore + score1El) > 100) {
        document.querySelector(`player--${activePlayer}`).classList.toggle('player--winner');
      }
      let totScore = currentScore + score1El;
      console.log(`Total player 1 score = ${totScore}`);
      console.log(`Total player 1 score = ${currentScore}`);
      console.log(`Total player 1 score = ${score1El}`);
    }
    if (currentScore  > 100) {
     document.querySelector(`player--${activePlayer}`).classList.toggle('player--winner');
    } else {

    }

    console.log(currentScore);
  } else {
    //switch player
    //Using the toggle method -- Much easier


    // Using if conditions -- More difficult
    // if(activePlayer ===  0) {
    //   player0El.classList.remove('player--active');
    //   player1El.classList.add('player--active');
    // } else {
    //   player1El.classList.remove('player--active');
    //   player0El.classList.add('player--active');
    // }
    // player0El.classList.remove('.player--active');
    // player1El.classList.add('.player--active'
    switchPlayer();
  };
});

btnHold.addEventListener('click', function () {
  //if(scores[activePlayer] < 100) {
    if (activePlayer === 0) {
      scores[0] += currentScore;
      score0El.textContent = scores[0];
    } else {
      scores[1] += currentScore;
      score1El.textContent = scores[1];
    }
    //switch player
    switchPlayer();
  //} else {
  //}
});


function switchPlayer () {

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = (activePlayer === 0 ? 1 : 0);
};

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //document.querySelector(`#current--${activePlayer}`).textContent = 0;
});
