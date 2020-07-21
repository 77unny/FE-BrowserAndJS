import * as Sound from './sound.js';
export default class Field {
  constructor({ element, itemCount }) {
    this.element = element;
    this.itemCount = itemCount;
    this.elementRect = this.element.getBoundingClientRect();
    this.element.addEventListener('click', this.onClick);
  }
  init() {
    const { width, height } = this.elementRect;
    this.element.innerHTML = '';

    for (let i = 0; i < this.itemCount; i++) {
      this._createElements({ type: 'item', index: i, width, height });
      this._createElements({ type: 'bug', index: i, width, height });
    }
  }
  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
  onClick = e => {
    const target = e.target;
    if (target.matches('.item')) {
      Sound.playCarrot();
      this.onItemClick && this.onItemClick('item');
      return target.remove();
    }
    if (target.matches('.bug')) return this.onItemClick && this.onItemClick('bug');
  };
  _createElements({ type, index, width, height }) {
    const paddingRange = 100;
    const topCoordinate = _randomPosition(height - paddingRange);
    const leftCoordinate = _randomPosition(width - paddingRange);
    const newElement = `<div class=${type} data-item="${type}-${index}" style="position:absolute; top:${topCoordinate}px; left: ${leftCoordinate}px;">${type}</div>`;
    return this.element.insertAdjacentHTML('beforeend', newElement);
  }
}

const _randomPosition = max => Math.floor(Math.random() * max);
