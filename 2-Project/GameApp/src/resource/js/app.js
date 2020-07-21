import * as Utils from './utils/constant.js';
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

const carrotSound = new Audio('./resource/sound/carrot_pull.mp3');
const alertSound = new Audio('./resource/sound/alert.wav');
const bugSound = new Audio('./resource/sound/bug_pull.mp3');
const bgSound = new Audio('./resource/sound/bg.mp3');
const winSound = new Audio('./resource/sound/game_win.mp3');

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
  console.log(item);
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

  gameField.init();
  gamePopup.show();
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
  gamePopup.showPopupText(msg);
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

gamePopup.setClickListener(startGame);
gameField.setClickListener(onClickField);
// fieldElement.addEventListener('click', onClickFieldTarget);
