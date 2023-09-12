let stopwatch;
let elapsedTime = 0;
let running = false;

function updateStopwatch() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    document.getElementById('time').innerText =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', function () {
    if (!running) {
        stopwatch = setInterval(function () {
            elapsedTime++;
            updateStopwatch();
        }, 1000);
        running = true;
    }
});

document.getElementById('stop').addEventListener('click', function () {
    if (running) {
        clearInterval(stopwatch);
        running = false;
    }
});

document.getElementById('reset').addEventListener('click', function () {
    elapsedTime = 0;
    updateStopwatch();
    if (running) {
        clearInterval(stopwatch);
        running = false;
    }
});