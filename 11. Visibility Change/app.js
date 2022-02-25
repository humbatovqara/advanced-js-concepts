let seconds = 10,
    span = document.getElementById('seconds');

const counter = () => {
    if (seconds > 1) {
        seconds -= 1
        span.innerText = seconds
    } else {
        clearInterval(countdown);
    }
}

let countdown = setInterval(counter, 1000);

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        countdown = setInterval(counter, 100);
    } else {
        console.log("Stopped countdown");
        clearInterval(countdown);
    }
})