'use strict';

console.log(document.querySelector('.message').textContent);

let message = document.querySelector('.message');
const number = document.querySelector('.number');

let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let guessInput = document.querySelector('.guess');
console.log(guessInput.value);

if (guessInput.value == number.textContent) {
  message.textContent = 'CORRECT';
} else {
  message.textContent = 'WRONG';
}

const calcScore = () => {
  const input = Number(document.querySelector('.guess').value);

  if ((!input || typeof input) !== 'number') {
    message.textContent = 'Not a valid number';
  } else if (input === secretNumber) {
    message.textContent = 'CORRECT';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#ffffff';
  } else {
    message.textContent = 'WRONG';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
  }
};

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', calcScore);
