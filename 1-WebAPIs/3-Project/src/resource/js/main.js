import * as TAG_LIST from './constant.js';
import { LOG } from './utils.js';

window.addEventListener('DOMContentLoaded', () => {
  LOG(TAG_LIST.MAIN);

  const formElement = document.querySelector(TAG_LIST.ELEMENTS_NAMESPACE.FORM);
  const formInputElement = document.querySelector(TAG_LIST.ELEMENTS_NAMESPACE.INPUT);
  const listElement = document.querySelector('.shopping-list');
  let shoppingItem = null;

  formInputElement.focus();

  formElement.addEventListener('submit', e => {
    e.preventDefault();
    if (!shoppingItem) return;
    listElement.insertAdjacentHTML(
      'beforeend',
      `<div class="shopping-item"><span>${shoppingItem}</span><button class="btn-del">제거</button></div>`,
    );
    formInputElement.value = '';
    shoppingItem = null;
  });
  formElement.addEventListener('input', e => (shoppingItem = e.target.value));
});
