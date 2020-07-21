const carrotSound = new Audio('./resource/sound/carrot_pull.mp3');
const alertSound = new Audio('./resource/sound/alert.wav');
const bugSound = new Audio('./resource/sound/bug_pull.mp3');
const bgSound = new Audio('./resource/sound/bg.mp3');
const winSound = new Audio('./resource/sound/game_win.mp3');

const playSound = sound => {
  sound.currentTime = 0;
  return sound.play();
};

const stopSound = sound => {
  return sound.pause();
};

export const playCarrot = () => playSound(carrotSound);
export const playBug = () => playSound(bugSound);
export const playAlert = () => playSound(alertSound);
export const playWin = () => playSound(winSound);
export const playBg = () => playSound(bgSound);
export const stopBg = () => stopSound(bgSound);
