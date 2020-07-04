const startMessage = '[1-WebAPIs : window size]';

const windowSize = () => {
  const windowScreen = window.screen;
  const windowOuterWidth = window.outerWidth;
  const windowOuterHeigth = window.outerHeight;
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight;
  const documentBodyClientWidth = document.documentElement.clientWidth;
  const documentBodyClientHeight = document.documentElement.clientHeight;

  const windowScreeText = `<p>window.screen : ${windowScreen.width} / ${windowScreen.height}</p>`;
  const windowOuterText = `<p>window.outer : ${windowOuterWidth} / ${windowOuterHeigth}</p>`;
  const windowInnerSizeText = `<p>window.inner : ${windowInnerWidth} / ${windowInnerHeight}</p>`;
  const documentClientSizeText = `<p>document.documentElement.client : ${documentBodyClientWidth} / ${documentBodyClientHeight}</p>`;

  document.body.innerHTML = windowScreeText + windowOuterText + windowInnerSizeText + documentClientSizeText;
};

window.addEventListener('DOMContentLoaded', windowSize);
window.addEventListener('resize', windowSize);
