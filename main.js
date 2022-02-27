'use strict';

const CARROT_SIZE = 80;

const gameButton = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();

function initGame() {
  // locate bugs and carrots randomly in places
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);

    item.style.position = 'absolute';

    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);

    item.style.left = x + 'px';
    item.style.top = y + 'px';

    gameField.append(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

initGame();
