import * as TAG_LIST from './constant.js';
import { LOG } from './utils.js';

window.addEventListener('DOMContentLoaded', () => {
  LOG(TAG_LIST.MAIN);

  const formElement = document.querySelector(TAG_LIST.ELEMENTS_NAMESPACE.FORM);
  const formInputElement = document.querySelector(TAG_LIST.ELEMENTS_NAMESPACE.INPUT);
  const shoppingList = new Set();
  let shoppingItem = null;

  formInputElement.focus();

  formElement.addEventListener('submit', e => {
    e.preventDefault();
    shoppingList.add(shoppingItem);
    formInputElement.value = '';
  });
  formElement.addEventListener('input', e => (shoppingItem = e.target.value));
});
