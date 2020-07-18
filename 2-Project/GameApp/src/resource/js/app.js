import * as Utils from './utils/constant.js';
import Popup from './popup.js';

const root = document.querySelector('#game-app');
const popupElement = root.querySelector('.game-popup');
const gameMsgElement = popupElement.querySelector('.game-massage');
const playBtnElement = popupElement.querySelector('.play');
const replayBtnElement = popupElement.querySelector('.replay');

const gamePopup = new Popup({
  popupElement: popupElement,
  gameMsgElement: gameMsgElement,
  playBtnElement: playBtnElement,
  replayBtnElement: replayBtnElement,
});

const onClickPopUp = e => {
  console.log(e.target);
};
gamePopup.setClickListener(onClickPopUp);
