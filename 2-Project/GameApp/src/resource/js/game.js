import * as Sound from './sound.js';
import Popup from './popup.js';
import Field from './field.js';

export default class Game {
  constructor({ itemCount, timer }) {
    this.timerElement = document.querySelector('.game-timer span');
    this.fieldElement = document.querySelector('.game-field');
    this.popupElement = document.querySelector('.game-popup');
    this.gameMsgElement = document.querySelector('.game-massage');
    this.playBtnElement = document.querySelector('.play');
    this.replayBtnElement = document.querySelector('.replay');
    this.countElement = document.querySelector('.game-count .count');

    this.gameField = new Field({
      element: this.fieldElement,
      itemCount: itemCount,
    });
    this.gamePopup = new Popup({
      popupElement: this.popupElement,
      gameMsgElement: this.gameMsgElement,
      playBtnElement: this.playBtnElement,
      replayBtnElement: this.replayBtnElement,
    });
    this.gamePopup.setClickListener(this.start);
    this.gameField.setClickListener(this.onClickField);
    this.gameStatus = false;
    this.countTimer = null;
    this.itemCount = itemCount;
    this.timer = timer;
  }

  onClickField = item => {
    if (item === 'bug') return this.finish('replay game');
    if (item === 'item') {
      this.itemCount--;
      if (this.itemCount === 0) {
        this.gameStatus = !this.gameStatus;
        return this.finish('Congratulations!! 👏');
      }
      return (this.countElement.innerHTML = this.itemCount);
    }
  };

  setReverseCountTIme(time) {
    const startTime = new Date();

    this.countTimer = setInterval(() => {
      const nowTime = new Date();
      const usedTime = (startTime.getTime() - nowTime.getTime()) / 1000;
      const millisec = (time + usedTime).toFixed(2);
      if (time === Math.abs(parseInt(usedTime))) {
        this.timerElement.innerHTML = `0.00`;
        this.gamePopup.show();
        this.gamePopup.showPopupText('replay game?');
        Sound.stopBg();
        Sound.playAlert();
        return clearInterval(this.countTimer);
      }
      this.timerElement.innerHTML = millisec;
    }, 10);
  }
  initial() {
    this.countElement.innerHTML = this.itemCount;
    this.gameField.init();
    this.gamePopup.show();
  }
  start = () => {
    this.initial();
    Sound.playBg();
    this.setReverseCountTIme(this.timer);
  };
  finish(msg) {
    this.initial();
    Sound.stopBg();
    Sound.playAlert();
    if (this.gameStatus) {
      Sound.playWin();
      this.gameStatus = !this.gameStatus;
    }
    this.gamePopup.showPopupText(msg);
    clearInterval(this.countTimer);
  }
}
