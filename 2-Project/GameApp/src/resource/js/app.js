import * as Utils from './utils/constant.js';
import * as Sound from './sound.js';
import Popup from './popup.js';
import Field from './field.js';

const root = document.querySelector('#game-app');
const timerElement = root.querySelector('.game-timer span');
const fieldElement = root.querySelector('.game-field');
const popupElement = root.querySelector('.game-popup');
const gameMsgElement = popupElement.querySelector('.game-massage');
const playBtnElement = popupElement.querySelector('.play');
const replayBtnElement = popupElement.querySelector('.replay');
const countElement = root.querySelector('.game-count .count');

let gameStatus = false;
let countTimer = null;
let itemCount = Utils.SET_COUNT;

const gamePopup = new Popup({
  popupElement: popupElement,
  gameMsgElement: gameMsgElement,
  playBtnElement: playBtnElement,
  replayBtnElement: replayBtnElement,
});

const gameField = new Field({
  element: fieldElement,
  itemCount: Utils.SET_COUNT,
});

const onClickField = item => {
  if (item === 'bug') return finishGame('replay game');
  if (item === 'item') {
    itemCount--;
    if (itemCount === 0) {
      gameStatus = !gameStatus;
      return finishGame('Congratulations!! 👏');
    }
    return (countElement.innerHTML = itemCount);
  }
};

const setReverseCountTIme = time => {
  const startTime = new Date();

  countTimer = setInterval(() => {
    const nowTime = new Date();
    const usedTime = (startTime.getTime() - nowTime.getTime()) / 1000;
    const millisec = (time + usedTime).toFixed(2);
    if (time === Math.abs(parseInt(usedTime))) {
      timerElement.innerHTML = `0.00`;
      gamePopup.show();
      gamePopup.showPopupText('replay game?');
      Sound.stopBg();
      Sound.playAlert();
      return clearInterval(countTimer);
    }
    timerElement.innerHTML = millisec;
  }, 10);
};

const initialGame = () => {
  itemCount = Utils.SET_COUNT;
  countElement.innerHTML = itemCount;

  gameField.init();
  gamePopup.show();
};

const startGame = () => {
  initialGame();
  Sound.playBg();
  setReverseCountTIme(Utils.SET_TIMER);
};

const finishGame = msg => {
  initialGame();
  Sound.stopBg();
  Sound.playAlert();
  if (gameStatus) {
    Sound.playWin();
    gameStatus = !gameStatus;
  }
  gamePopup.showPopupText(msg);
  clearInterval(countTimer);
};

const removeCount = () => {
  itemCount--;
  Sound.playCarrot();
  if (itemCount === 0) {
    gameStatus = !gameStatus;
    return finishGame('Congratulations!! 👏');
  }
  return (countElement.innerHTML = itemCount);
};

gamePopup.setClickListener(startGame);
gameField.setClickListener(onClickField);
