'use strict';

// variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayGuessValue = function (num) {
  document.querySelector('.guess').value = num;
};

const setStyleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const dispalyNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

// document.querySelector('.number').textContent = secretNumber;

console.log(`secret number = ${secretNumber}`);
console.log(`score = ${score}`);

//  event listener for "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);

  displayGuessValue('');

  setBackgroundColor('#222');
  setStyleWidth('15rem');
  dispalyNumber('?');
});

// event listener for "Check!" btn.  Contains game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // validation.  ensures a number is inputted
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    // win condition
  } else if (guess === secretNumber) {
    dispalyNumber(secretNumber);

    displayMessage('🎉 Correct Number!');

    setBackgroundColor('#60b347');
    setStyleWidth('30rem');

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore('0');
    }
  }
});
