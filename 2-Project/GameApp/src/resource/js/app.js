import * as Utils from './utils/constant.js';
import Game from './game.js';

const rootElement = document.querySelector('#game-app');

const game = new Game({
  rootElement: rootElement,
  itemCount: Utils.SET_COUNT,
  timer: Utils.SET_TIMER,
});
