

const waitTime = 3000;
console.log('setting a ${waitTime / 1000} second delay');
const timerFinished = () => {
    clearInterval(interval)
    console.log("Done");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    console.log('waiting ${(currentTime) / 1000} seconds');
    console.log('waiting ... ${p}');
};

const interval = setInterval(incTime, waitInterval);