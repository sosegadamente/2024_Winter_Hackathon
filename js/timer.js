// timer.js

let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplayAndSave, 1000);
}

function stopTimer() {
    clearInterval(timer);
    saveTimerState();
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startTime = undefined;
    elapsedTime = 0;
    updateDisplayAndSave();
}

function updateDisplayAndSave() {
    updateDisplay();
    saveTimerState();
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

function saveTimerState() {
    try {
        localStorage.setItem('timerState', JSON.stringify({ isRunning, startTime, elapsedTime }));
    } catch (error) {
        console.error('Error saving timer state:', error);
    }
}

function loadTimerState() {
    const timerState = JSON.parse(localStorage.getItem('timerState'));

    if (timerState) {
        isRunning = timerState.isRunning;

        if (isRunning) {
            startTimer();
        }
    }
}

// Load timer state on page load
loadTimerState();

document.getElementById('startBtn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startTimer();
        saveTimerState();
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        stopTimer();
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    resetTimer();
});

// Add window unload event to save state
window.addEventListener('beforeunload', saveTimerState);
