let sessionLength = 16;
let breakLength = 5;
let timer;
let isRunning = false;
let minutes;
let seconds;
let mode = "session"; // Added mode variable

function updateTimerDisplay() {
  document.getElementById("timer").textContent = formatTime(minutes, seconds);
}

function formatTime(min, sec) {
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function changeSessionLength(amount) {
  sessionLength += amount;
  if (sessionLength < 1) {
    sessionLength = 1;
  }
  document.getElementById("sessionLength").textContent = sessionLength;
}

function changeBreakLength(amount) {
  breakLength += amount;
  if (breakLength < 1) {
    breakLength = 1;
  }
  document.getElementById("breakLength").textContent = breakLength;
}

function startTimer() {
  if (!isRunning) {
    minutes = sessionLength;
    seconds = 0;
    updateTimerDisplay();
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
    mode = "session";
    document.getElementById("startStop").textContent = "Stop";
    document.getElementById("startStop").style.backgroundColor = "red";
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("startStop").style.backgroundColor = "green";
}

function startStopTimer() {
  if (isRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    if (mode === "session") {
      minutes = breakLength;
      mode = "break";
    } else {
      minutes = sessionLength;
      mode = "session";
    }
    updateTimerDisplay();
    alert("Timer completed!");
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }
}

function resetTimer() {
  stopTimer();
  minutes = sessionLength;
  seconds = 0;
  updateTimerDisplay();
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("startStop").style.backgroundColor = "green";
}
