import Header from './Components/Header/header.js';
import List from './Components/List/list.js';
import Form from './Components/Form/form.js';

const root = document.querySelector('#shopping-app');

const connectComponents = (root, ...arg) => {
  const components = [...arg];
  return components.forEach(item => {
    root.insertAdjacentHTML('beforeend', item());
  });
};
connectComponents(root, Header, List, Form);
