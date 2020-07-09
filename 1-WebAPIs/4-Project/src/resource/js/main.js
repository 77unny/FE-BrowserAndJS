import * as Utils from './utils/utils.js';
import * as CONSTANT from './utils/constant.js';
import Header from './Components/Header/header.js';
import List from './Components/List/list.js';
import Form from './Components/Form/form.js';

const MOCK_LIST = new Map();

const root = document.querySelector('#shopping-app');
const headerComponent = Header({ classname: CONSTANT.ELEMENTS_CLASSNAME.TITLE, title: CONSTANT.TITLE });
const listComponent = List({ classname: CONSTANT.ELEMENTS_CLASSNAME.LIST });
const formComponent = Form({ classname: CONSTANT.ELEMENTS_CLASSNAME.FORM });

Utils.connectComponents(root, {
  header: headerComponent,
  list: listComponent,
  form: formComponent,
});

let COUNT_ID = CONSTANT.COUNT_ID;

const formElement = document.querySelector(CONSTANT.ELEMENTS_NAMESPACE.FORM);
const formInputElement = document.querySelector(CONSTANT.ELEMENTS_NAMESPACE.INPUT);
const listElement = document.querySelector(CONSTANT.ELEMENTS_NAMESPACE.LIST);

const setListData = data => {
  const { id, title } = data;
  MOCK_LIST.set(id, title);
  return;
};
const deleteListData = id => MOCK_LIST.delete(id);

const clearDocumentList = () => (listElement.innerHTML = '');

const createItem = (item, index) => {
  const itemElement = `<div class="shopping-item"><span>${item}</span><button class="btn-del" data-index=${index}>제거</button></div>`;
  listElement.insertAdjacentHTML('beforeend', itemElement);

  const btnDel = document.querySelector(`[data-index="${index}"]`);

  btnDel.addEventListener('click', () => {
    deleteListData(index);
    clearDocumentList();
    renderList(MOCK_LIST);
  });
  return;
};

const renderList = dataList => {
  dataList.forEach((item, index) => {
    createItem(item, index);
  });
  return;
};

formElement.addEventListener('submit', e => {
  e.preventDefault();
  if (!formInputElement.value) return;
  setListData({ id: COUNT_ID, title: formInputElement.value });
  COUNT_ID++;
  clearDocumentList();
  renderList(MOCK_LIST);
  formInputElement.value = '';
});

formInputElement.focus();
