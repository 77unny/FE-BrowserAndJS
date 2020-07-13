import * as Utils from './utils/constant.js';

const root = document.querySelector('#game-app');
const timerElement = root.querySelector('.game-timer span');
const fieldElement = root.querySelector('.game-field');
const popupElement = root.querySelector('.game-popup');
const totalElement = root.querySelector('.game-count .total');
const countElement = root.querySelector('.game-count .count');

const setCountTime = time => {
  const startTime = new Date();

  const count = setInterval(() => {
    const nowTime = new Date();
    const usedTime = nowTime.getTime() - startTime.getTime() / 1000;
    const millisec = usedTime.toFixed(2);
    if (time === parseInt(usedSec)) {
      timerElement.innerHTML = `${time}.00`;
      return clearInterval(count);
    } else {
      timerElement.innerHTML = millisec;
    }
  }, 10);
};

const setReverseCountTIme = time => {
  const startTime = new Date();

  window.count = setInterval(() => {
    const nowTime = new Date();
    const usedTime = (startTime.getTime() - nowTime.getTime()) / 1000;
    const millisec = (time + usedTime).toFixed(2);
    if (time === Math.abs(parseInt(usedTime))) {
      timerElement.innerHTML = `0.00`;
      popupElement.setAttribute('style', 'opacity:1; z-index:1');
      return clearInterval(window.coun);
    } else {
      timerElement.innerHTML = millisec;
    }
  }, 10);
};

const initialGame = () => {
  itemCount = Utils.SET_COUNT;
  countElement.innerHTML = itemCount;
  popupElement.setAttribute('style', 'opacity:1; z-index:1');
};

const startGame = () => {
  setReverseCountTIme(Utils.SET_TIMER);
  popupElement.setAttribute('style', 'opacity:0; z-index:-1');
};

const gameOver = () => {
  initialGame();
  clearInterval(window.count);
};

popupElement.addEventListener('click', startGame);

const fieldArea = fieldElement.getBoundingClientRect();
const { width, height } = fieldArea;
const randomPosition = max => Math.floor(Math.random() * max);

const createElements = ({ type, index, width, height }) => {
  const paddingRange = 100;
  const topCoordinate = randomPosition(height - paddingRange);
  const leftCoordinate = randomPosition(width - paddingRange);
  const newElement = `<div class=${type} data-item="${type}-${index}" style="position:absolute; top:${topCoordinate}px; left: ${leftCoordinate}px;">${type}</div>`;
  fieldElement.insertAdjacentHTML('beforeend', newElement);
};

for (let i = 0; i < Utils.SET_COUNT; i++) {
  createElements({ type: 'item', index: i, width, height });
  createElements({ type: 'bug', index: i, width, height });
}

let itemCount = Utils.SET_COUNT;
totalElement.innerHTML = Utils.SET_COUNT;
countElement.innerHTML = itemCount;

const removeCount = () => {
  itemCount--;
  return (countElement.innerHTML = itemCount);
};

fieldElement.addEventListener('click', e => {
  if (!e.target.dataset.item) return;
  fieldElement.removeChild(e.target);
  e.target.className === 'bug' && gameOver();
  e.target.className === 'item' && removeCount();
});
