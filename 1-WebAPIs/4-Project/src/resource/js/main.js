import * as Utils from './utils/utils.js';
import * as CONSTANT from './utils/constant.js';
import Header from './Components/Header/header.js';
import List from './Components/List/list.js';
import Form from './Components/Form/form.js';

const root = document.querySelector('#shopping-app');
const headerComponent = Header(CONSTANT.TITLE);
const listComponent = List();
const formComponent = Form();

Utils.connectComponents(root, {
  header: headerComponent,
  list: listComponent,
  form: formComponent,
});
