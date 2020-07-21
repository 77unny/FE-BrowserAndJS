export default class Popup {
  constructor({ popupElement, gameMsgElement, playBtnElement, replayBtnElement }) {
    this.popupElement = popupElement;
    this.gameMsgElement = gameMsgElement;
    this.playBtnElement = playBtnElement;
    this.replayBtnElement = replayBtnElement;
    this.showPopupText('Play Game');
    this.playBtnElement.addEventListener('click', e => {
      this.onClick && this.onClick(e);
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  hide() {
    this.popupElement.classList.remove('show-popup');
  }

  show() {
    this.popupElement.classList.add('show-popup');
  }

  showPopupText(text) {
    this.gameMsgElement.innerHTML = text;
  }
}
