// script.js
let timer;
let timeLeft = 60; // Set initial time in seconds
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

// Format time as mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update the timer display
function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

// Start the timer
function startTimer() {
  if (timer) return; // Prevent multiple timers

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      alert("Time's up!");
    }
  }, 1000);
}

// Reset the timer
function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 60; // Reset to initial time
  updateDisplay();
}

// Initialize
updateDisplay();

// Attach event listeners
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
