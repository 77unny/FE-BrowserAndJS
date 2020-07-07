import * as TAG_LIST from './constant.js';
import { LOG } from './utils.js';

window.addEventListener('DOMContentLoaded', () => {
  LOG(TAG_LIST.MAIN);

  const formElement = document.querySelector('.shopping-form form');
  const shoppingList = new Set();
  let shoppingItem = null;

  formElement.addEventListener('submit', e => {
    e.preventDefault();
    shoppingList.add(shoppingItem);
  });
  formElement.addEventListener('input', e => {
    shoppingItem = e.target.value;
  });
});
