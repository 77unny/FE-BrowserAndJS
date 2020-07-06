const pointerSize = 30;
const templateElements = `
<div class="mouse-pointer"></div>
<div class="mouse-line-y"></div>
<div class="mouse-line-x"></div>
`;

window.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = templateElements;
  const mousePointerElement = document.querySelector('.mouse-pointer');
  const lineYElement = document.querySelector('.mouse-line-y');
  const lineXElement = document.querySelector('.mouse-line-x');

  document.addEventListener('mousemove', e => {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    mousePointerElement.setAttribute(
      'style',
      `position:absolute; top:${pointerY + pointerSize}px; left:${pointerX + pointerSize}px; color:#fff;`,
    );
    lineXElement.setAttribute(
      'style',
      `position:absolute; top:${pointerY}px; left: 0;width:100%; height:1px; background: #fff`,
    );
    lineYElement.setAttribute(
      'style',
      `position:absolute; top:0; left: ${pointerX}px; width:1px; height:100%; background: #fff`,
    );
    mousePointerElement.innerHTML = `${pointerX} | ${pointerY}`;
  });
});
