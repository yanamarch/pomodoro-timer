const timer = document.getElementById('pomodoro-time');
const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
let isRunning = false;
let interval;

btnStart.addEventListener('click', function() {
    if (!isRunning) {
        isRunning = true;
        btnStart.textContent = 'stop';
        let timerArray = timer.innerHTML.split(':');
        let minutes = parseInt(timerArray[0]);
        let seconds = parseInt(timerArray[1]);

        interval = setInterval(() => {
            seconds--;

            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }

            if (minutes === 0 && seconds === 0) {
                clearInterval(interval);
                timer.innerHTML = "25:00";
                btnStart.textContent = 'start';
                isRunning = false;
            }

            let formattedTimer = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            timer.innerHTML = formattedTimer;
        }, 1000);
    } else {
        clearInterval(interval);
        isRunning = false;
        btnStart.textContent = 'start';
    }

});

btnReset.addEventListener('click', function() {
    timer.innerHTML = '25:00';
    btnStart.textContent = 'start';
    clearInterval(interval);
    isRunning = false;
});