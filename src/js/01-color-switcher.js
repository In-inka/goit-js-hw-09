const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.disabled = false;
stopBtn.disabled = true;

let setIntervalId;

startBtn.addEventListener('click', onClickStart);

stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  setIntervalId = setInterval(bodyColorStyle, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onClickStop() {
  clearInterval(setIntervalId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bodyColorStyle() {
  document.body.style.backgroundColor = getRandomHexColor();
}
