import * as Utils from './utils/constant.js';

const root = document.querySelector('#game-app');
const timerElement = root.querySelector('.game-timer span');
const fieldElement = root.querySelector('.game-field');
const popupElement = root.querySelector('.game-popup');
const gameMsgElement = popupElement.querySelector('.game-massage');
const countElement = root.querySelector('.game-count .count');
const fieldArea = fieldElement.getBoundingClientRect();
const { width, height } = fieldArea;

let countTimer = null;
let itemCount = Utils.SET_COUNT;
gameMsgElement.innerHTML = 'Game Start';

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

  countTimer = setInterval(() => {
    const nowTime = new Date();
    const usedTime = (startTime.getTime() - nowTime.getTime()) / 1000;
    const millisec = (time + usedTime).toFixed(2);
    if (time === Math.abs(parseInt(usedTime))) {
      timerElement.innerHTML = `0.00`;
      popupElement.setAttribute('style', 'opacity:1; z-index:1');
      return clearInterval(countTimer);
    }
    timerElement.innerHTML = millisec;
  }, 10);
};

const initialGame = () => {
  itemCount = Utils.SET_COUNT;
  countElement.innerHTML = itemCount;
  fieldElement.innerHTML = '';

  for (let i = 0; i < Utils.SET_COUNT; i++) {
    createElements({ type: 'item', index: i, width, height });
    createElements({ type: 'bug', index: i, width, height });
  }

  popupElement.setAttribute('style', 'opacity:1; z-index:1');
};

const startGame = () => {
  initialGame();
  setReverseCountTIme(Utils.SET_TIMER);
  popupElement.setAttribute('style', 'opacity:0; z-index:-1');
};

const finishGame = () => {
  initialGame();
  showGameMsg('Re Play?');
  clearInterval(countTimer);
};

const showGameMsg = msg => (gameMsgElement.innerHTML = msg);

const randomPosition = max => Math.floor(Math.random() * max);

const createElements = ({ type, index, width, height }) => {
  const paddingRange = 100;
  const topCoordinate = randomPosition(height - paddingRange);
  const leftCoordinate = randomPosition(width - paddingRange);
  const newElement = `<div class=${type} data-item="${type}-${index}" style="position:absolute; top:${topCoordinate}px; left: ${leftCoordinate}px;">${type}</div>`;
  fieldElement.insertAdjacentHTML('beforeend', newElement);
};

const removeCount = () => {
  itemCount--;
  itemCount === 0 && finishGame();
  return (countElement.innerHTML = itemCount);
};

const onClickFieldTarget = e => {
  if (!e.target.dataset.item) return;
  fieldElement.removeChild(e.target);
  e.target.className === 'bug' && finishGame();
  e.target.className === 'item' && removeCount();
};

const onClickPlayGame = e => {
  e.target.className === 'play' && startGame();
  e.target.className === 'replay' && startGame();
};

popupElement.addEventListener('click', onClickPlayGame);
fieldElement.addEventListener('click', onClickFieldTarget);
