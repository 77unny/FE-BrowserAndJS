export default class Popup {
  constructor({ popupElement, gameMsgElement, playBtnElement, replayBtnElement }) {
    this.popupElement = popupElement;
    this.gameMsgElement = gameMsgElement;
    this.playBtnElement = playBtnElement;
    this.replayBtnElement = replayBtnElement;
    this.popupElement.addEventListener('click', e => {
      this.onClick && this.onClick(e);
    });
    this.playBtnElement.addEventListener('click', e => {
      console.log('click');
    });
  }
  setClickListener(onClick) {
    this.onClick = onClick;
  }
}
