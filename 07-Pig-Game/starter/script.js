'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');
const buttonRollDice = document.querySelector('.btn--roll');
const buttonNewGame = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const rollDice = function () {
  // 1. Generate random dice roll
  const number = Math.trunc(Math.random() * 6) + 1;

  // 2. display the dice
  dice.src = `dice-${number}.png`;
  if (dice.classList.contains('hidden')) {
    dice.classList.remove('hidden');
  }

  // 3. If number === 1 , switch player, else add score
  if (number !== 1) {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
};

buttonRollDice.addEventListener('click', rollDice);

const holdScore = function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] < 100) {
    switchPlayer();
  } else {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
};
buttonHold.addEventListener('click', holdScore);
