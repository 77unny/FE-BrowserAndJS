import * as Utils from './utils/utils.js';
import * as CONSTANT from './utils/constant.js';
import Header from './Components/Header/header.js';
import List from './Components/List/list.js';
import Form from './Components/Form/form.js';
const MOCK_LIST = new Map();

const root = document.querySelector('#shopping-app');
const headerComponent = Header(CONSTANT.TITLE);
const listComponent = List(MOCK_LIST);
const formComponent = Form();

Utils.connectComponents(root, {
  header: headerComponent,
  list: listComponent,
  form: formComponent,
});

const formElement = document.querySelector('.shopping-form');
const formInputElement = document.querySelector('.shopping-form input');
const listElement = document.querySelector('.shopping-list');

const setListData = data => {
  const { id, title } = data;
  MOCK_LIST.set(id, title);
  return MOCK_LIST;
};
const deleteListData = id => MOCK_LIST.delete(id);

const initialDocument = () => {
  listElement.innerHTML = '';
};

const createItem = (item, index) => {
  const titleElement = `<div>${item}</div>`;
  const buttonElment = `<button class="btn-del" data-index=${index}>제거</button>`;
  listElement.insertAdjacentHTML('beforeend', titleElement);
  listElement.insertAdjacentHTML('beforeend', buttonElment);

  const btnDel = document.querySelector(`[data-index="${index}"]`);
  btnDel.addEventListener('click', () => {
    deleteListData(index);
    initialDocument();
    renderList(MOCK_LIST);
  });
  return;
};

const renderList = dataList => {
  dataList.forEach((item, index) => {
    createItem(item, index);
  });
};

let idCount = 1;
formElement.addEventListener('submit', e => {
  e.preventDefault();
  setListData({ id: idCount, title: formInputElement.value });
  idCount++;
  initialDocument();
  renderList(MOCK_LIST);
  formInputElement.value = '';
});
