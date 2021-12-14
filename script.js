'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 15;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.again').addEventListener('click', function () {
    score = 15;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
    document.querySelector('.number').style.width = '15rem';
  });

  if (!guess) {
    document.querySelector('.message').textContent = 'Input Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉Well Done Correct Number! 👏';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ' Too High Choose Small Number! 😒';
      document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)';
      document.querySelector('.number').style.width = '30rem';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you Lost the game 😜🤦‍♂️';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Too Low Choose Big Number! 🤦‍♂️ ';
      document.querySelector('body').style.backgroundColor = 'rgb(191, 204, 7)';
      document.querySelector('.number').style.width = '30rem';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you Lost the game 😜🤦‍♂️';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  }
});
