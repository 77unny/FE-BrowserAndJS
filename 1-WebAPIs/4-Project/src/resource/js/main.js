import * as Utils from './utils/utils.js';
import * as CONSTANT from './utils/constant.js';
import Header from './Components/Header/header.js';
import List from './Components/List/list.js';
import Form from './Components/Form/form.js';
const MOCK_LIST = new Map();

const root = document.querySelector('#shopping-app');
// const headerComponent = Header(CONSTANT.TITLE);
// const listComponent = List(MOCK_LIST);

// const formComponent = Form();

// root.insertAdjacentHTML('beforeend', headerComponent);
// root.insertAdjacentHTML('beforeend', formComponent);

// Utils.connectComponents(root, {
//   header: headerComponent,
//   list: listComponent,
//   form: formComponent,
// });

const setListData = data => {
  const { id, title } = data;
  MOCK_LIST.set(id, title);
  return MOCK_LIST;
};
const deleteListData = id => MOCK_LIST.delete(id);

const initialDocument = () => {
  root.innerHTML = '';
};

const createItem = (item, index) => {
  const titleElement = `<div>${item}</div>`;
  const buttonElment = `<button class="btn-del" data-index=${index}>제거</button>`;
  root.insertAdjacentHTML('beforeend', titleElement);
  root.insertAdjacentHTML('beforeend', buttonElment);

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

setListData({ id: 1, title: '우유' });
setListData({ id: 2, title: '커피' });
setListData({ id: 3, title: '커피3' });
setListData({ id: 4, title: '커피4' });

renderList(MOCK_LIST);
