export const connectComponents = (root, elementObj) => {
  const template = Object.keys(elementObj).reduce((html, element) => {
    return (html += elementObj[element]);
  }, '');
  return root.insertAdjacentHTML('beforeend', template);
};
