const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const releaseDateOf = '22 sept 2022';

function releaseDate (){
    const releaseOfDate = new Date(releaseDateOf);
    const currentDate = new Date();

    const totalSecond = (releaseOfDate - currentDate) / 1000;

    const days = Math.floor( totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600 ) % 24;
    const mins = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

   
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

releaseDate();

setInterval(releaseDate, 1000);