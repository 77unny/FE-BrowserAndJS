import * as Utils from './utils/utils.js';
import Header from './Components/Header/header.js';
import List from './Components/List/list.js';
import Form from './Components/Form/form.js';

const root = document.querySelector('#shopping-app');

Utils.connectComponents(root, Header, List, Form);
