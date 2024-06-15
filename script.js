let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let reset = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startStopBtn.innerHTML = "Stop";
        running = true;
        reset = false;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerHTML = "Start";
        running = false;
    }
}

function resetTime() {
    clearInterval(tInterval);
    reset = true;
    running = false;
    startStopBtn.innerHTML = "Start";
    display.innerHTML = "00:00:00";
    difference = 0;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    if (reset) {
        difference = 0;
    } else {
        difference = updatedTime - startTime;
    }
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', resetTime);
