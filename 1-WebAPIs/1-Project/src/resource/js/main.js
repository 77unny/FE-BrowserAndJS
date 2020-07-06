const pointerSize = 30;

window.addEventListener('DOMContentLoaded', () => {
  const mousePointerElement = document.querySelector('.mouse-pointer');
  const lineYElement = document.querySelector('.mouse-line-y');
  const lineXElement = document.querySelector('.mouse-line-x');

  document.addEventListener('mousemove', e => {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    mousePointerElement.style.transform = `translate(${pointerX + pointerSize}px, ${pointerY + pointerSize}px)`;

    lineXElement.style.transform = `translateY(${pointerY}px)`;
    lineYElement.style.transform = `translateX(${pointerX}px)`;

    mousePointerElement.innerHTML = `${pointerX} | ${pointerY}`;
  });
});
