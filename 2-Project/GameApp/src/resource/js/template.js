export const timerComponent = () => {
  return `<div class="game-timer"><span>10.00</span>sec</div>`;
};

export const countComponent = () => {
  return `<div class="game-count"><span class="count"></span> 개</div>`;
};

export const fieldComponent = () => {
  return `<div class="game-field"></div>`;
};

export const popupComponent = () => {
  return `
  <div class="game-popup show-popup">
    <button class="play">Play</button>
    <button class="replay">Replay</button>
    <span class="game-massage"></span>
  </div>
`;
};
