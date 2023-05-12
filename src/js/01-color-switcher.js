const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.disabled = false;
stopBtn.disabled = true;

let setIntervalId;

startBtn.addEventListener('click', () => {
  onClickStart();
  btnDisabledStart();
});

stopBtn.addEventListener('click', () => {
  onClickStop();
  btnDisabledStop();
});

function btnDisabledStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function btnDisabledStop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function onClickStart() {
  setIntervalId = setInterval(bodyColorStyle, 1000);
  startBtn.disabled = true;
}

function onClickStop() {
  clearInterval(setIntervalId);
  setIntervalId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bodyColorStyle() {
  document.body.style.backgroundColor = getRandomHexColor();
}
