import * as Utils from './utils/constant.js';

const root = document.querySelector('#game-app');
const timerElement = root.querySelector('.game-timer span');
const popupElement = root.querySelector('.game-popup');

const setCountTime = time => {
  const startTime = new Date();

  const count = setInterval(() => {
    const nowTime = new Date();
    const usedSec = parseInt((nowTime.getTime() - startTime.getTime()) / 1000);
    const millisec = nowTime.getTime() - startTime.getTime();
    if (time === usedSec) {
      timerElement.innerHTML = `${time}.00`;
      return clearInterval(count);
    } else {
      timerElement.innerHTML = (millisec / 1000).toFixed(2);
    }
  }, 10);
};

const setReverseCountTIme = time => {
  const startTime = new Date();

  const count = setInterval(() => {
    const nowTime = new Date();
    const usedSec = startTime.getTime() - nowTime.getTime();
    if (time === Math.abs(parseInt(usedSec / 1000))) {
      timerElement.innerHTML = `0.00`;
      popupElement.setAttribute('style', 'opacity:1; z-index:1');
      return clearInterval(count);
    } else {
      timerElement.innerHTML = (time + usedSec / 1000).toFixed(2);
    }
  }, 10);
};

const startGame = () => {
  setReverseCountTIme(10);
  popupElement.setAttribute('style', 'opacity:0; z-index:-1');
};

popupElement.addEventListener('click', startGame);
