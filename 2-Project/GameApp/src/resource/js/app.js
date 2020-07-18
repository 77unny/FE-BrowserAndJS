import * as Utils from './utils/constant.js';
import Popup from './popup.js';

const root = document.querySelector('#game-app');
const timerElement = root.querySelector('.game-timer span');
const fieldElement = root.querySelector('.game-field');
const popupElement = root.querySelector('.game-popup');
const gameMsgElement = popupElement.querySelector('.game-massage');
const playBtnElement = popupElement.querySelector('.play');
const replayBtnElement = popupElement.querySelector('.replay');
const countElement = root.querySelector('.game-count .count');
const fieldArea = fieldElement.getBoundingClientRect();
const { width, height } = fieldArea;

const carrotSound = new Audio('./resource/sound/carrot_pull.mp3');
const alertSound = new Audio('./resource/sound/alert.wav');
const bugSound = new Audio('./resource/sound/bug_pull.mp3');
const bgSound = new Audio('./resource/sound/bg.mp3');
const winSound = new Audio('./resource/sound/game_win.mp3');

let gameStatus = false;
let countTimer = null;
let itemCount = Utils.SET_COUNT;
gameMsgElement.innerHTML = 'Game Start';

const gamePopup = new Popup({
  popupElement: popupElement,
  gameMsgElement: gameMsgElement,
  playBtnElement: playBtnElement,
  replayBtnElement: replayBtnElement,
});

const setReverseCountTIme = time => {
  const startTime = new Date();

  countTimer = setInterval(() => {
    const nowTime = new Date();
    const usedTime = (startTime.getTime() - nowTime.getTime()) / 1000;
    const millisec = (time + usedTime).toFixed(2);
    if (time === Math.abs(parseInt(usedTime))) {
      timerElement.innerHTML = `0.00`;
      gamePopup.show();
      stopSound(bgSound);
      playSound(alertSound);
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

  gamePopup.show();
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

const startGame = () => {
  initialGame();
  playSound(bgSound);
  setReverseCountTIme(Utils.SET_TIMER);
};

const finishGame = msg => {
  initialGame();
  stopSound(bgSound);
  playSound(alertSound);
  if (gameStatus) {
    playSound(winSound);
    gameStatus = !gameStatus;
  }
  showGameMsg(msg);
  clearInterval(countTimer);
};

const removeCount = () => {
  itemCount--;
  playSound(carrotSound);
  if (itemCount === 0) {
    gameStatus = !gameStatus;
    return finishGame('Congratulations!! 👏');
  }
  return (countElement.innerHTML = itemCount);
};

const playSound = sound => {
  sound.currentTime = 0;
  return sound.play();
};

const stopSound = sound => {
  return sound.pause();
};

const onClickFieldTarget = e => {
  if (!e.target.dataset.item) return;
  fieldElement.removeChild(e.target);
  if (e.target.className === 'bug') {
    playSound(bugSound);
    return finishGame("Sad, Let's do it again");
  }
  if (e.target.className === 'item') return removeCount();
};

gamePopup.setClickListener(startGame);
fieldElement.addEventListener('click', onClickFieldTarget);
