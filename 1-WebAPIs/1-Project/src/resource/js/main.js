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
  mousePointerElement.style.position = 'absolute';
  lineXElement.style.position = 'absolute';
  lineYElement.style.position = 'absolute';

  lineXElement.style.width = '100%';
  lineXElement.style.height = '1px';
  lineXElement.style.background = '#fff';

  lineYElement.style.width = '1px';
  lineYElement.style.height = '100%';
  lineYElement.style.background = '#fff';

  document.addEventListener('mousemove', e => {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    mousePointerElement.style.transform = `translate(${pointerX + pointerSize}px, ${pointerY + pointerSize}px)`;
    mousePointerElement.style.color = '#fff';

    lineXElement.style.transform = `translateY(${pointerY}px)`;
    lineYElement.style.transform = `translateX(${pointerX}px)`;

    mousePointerElement.innerHTML = `${pointerX} | ${pointerY}`;
  });
});
