export const connectComponents = (root, ...elements) => {
  return [...elements].forEach(item => {
    root.insertAdjacentHTML('beforeend', item);
  });
};
