import * as TAG_LIST from './constant.js';
import { LOG } from './utils.js';

window.addEventListener('DOMContentLoaded', () => {
  LOG(TAG_LIST.MAIN);

  const formElement = document.querySelector(TAG_LIST.ELEMENTS_NAMESPACE.FORM);
  const formInputElement = document.querySelector(TAG_LIST.ELEMENTS_NAMESPACE.INPUT);
  const listElement = document.querySelector('.shopping-list');
  let shoppingItem = null;

  const createItem = value => {
    const createDiv = document.createElement('div');
    const createSapn = document.createElement('span');
    const createBtn = document.createElement('button');
    createDiv.setAttribute('class', 'shopping-item');
    createBtn.setAttribute('class', 'btn-del');
    createBtn.innerText = '제거';
    createSapn.innerText = value;
    createBtn.addEventListener('click', () => listElement.removeChild(createDiv));
    createDiv.appendChild(createSapn);
    createDiv.appendChild(createBtn);
    return listElement.appendChild(createDiv);
  };

  const initalState = () => {
    formInputElement.focus();
    formInputElement.value = '';
    shoppingItem = null;
  };

  initalState();

  formElement.addEventListener('submit', e => {
    e.preventDefault();
    if (!shoppingItem) return;
    createItem(shoppingItem);
    initalState();
  });

  formElement.addEventListener('input', e => (shoppingItem = e.target.value));
});
