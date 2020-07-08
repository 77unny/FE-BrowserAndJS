export const connectComponents = (root, ...arg) => {
  const components = [...arg];
  return components.forEach(item => {
    root.insertAdjacentHTML('beforeend', item());
  });
};
