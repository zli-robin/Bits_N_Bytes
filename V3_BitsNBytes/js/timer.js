
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let timerValue = document.getElementById('timer-value');

let totalSeconds = 0;
let interval;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  totalSeconds = 0;
  updateTimerValue();
}

function updateTimer() {
  totalSeconds++;
  updateTimerValue();
}

function updateTimerValue() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

  timerValue.innerText = hours + ':' + minutes + ':' + seconds;
}