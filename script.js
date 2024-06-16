const stopWatchDuration = document.querySelector('.time');
console.log(stopWatchDuration);

start = document.querySelector('.start');
stop = document.querySelector('.stop');
reset = document.querySelector('.reset');
lap = document.querySelector('.lap');
laps = document.querySelector('.laps');

let hrs = 0,
    min = 0,
    sec = 0,
    ms = 0,
    timeInterval;

start.onclick = () => {
    if(!timeInterval){
        timeInterval = setInterval(() => {
            ms++;
            if (ms === 100) {
                ms = 0;
                sec++;
            }
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hrs++;
            }
            stopWatchDuration.innerHTML = `${zeroPad(hrs)}${" "}:${" "}${zeroPad(min)}${" "}:${" "}${zeroPad(sec)}${" "}:${" "}${zeroPad(ms)}`;
    
        }, 10);
    }
    
};

const zeroPad = (num) => {
    return String(num).padStart(2, "0");
}

stop.onclick = () => {
    clearInterval(timeInterval);
    timeInterval = null;
};

reset.onclick = () => {
    laps.innerHTML = "";
    hrs = min = sec = ms = 0;
    count = 0;
    clearInterval(timeInterval);
    stopWatchDuration.innerHTML = `${zeroPad(hrs)}${" "}:${" "}${zeroPad(min)}${" "}:${" "}${zeroPad(sec)}${" "}:${" "}${zeroPad(ms)}`;
    
};

let count = 0;
lap.onclick = () => {
    count++;
    let li = document.createElement('li');
    li.innerHTML = `Lap ${count} : ${zeroPad(hrs)}${" "}:${" "}${zeroPad(min)}${" "}:${" "}${zeroPad(sec)}${" "}:${" "}${zeroPad(ms)}`;
    document.querySelector('.laps').appendChild(li);
    laps.scroll({top: laps.scrollHeight, behavior: 'smooth'})
};
