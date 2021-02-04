const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secsElement = document.getElementById("secs");

function getDate(){
    const date = document.getElementById("date");
    
    return date.append();
}

const gette = getDate();

console.log(gette);

function countdown(){
    const getCompareDate = new Date(getDate);
    const currentDate = new Date();
    
    const totalSeconds = (getCompareDate - currentDate) / 1000;

    const days = parseInt(totalSeconds / 3600 / 24);
    const hours = parseInt(totalSeconds / 3600) % 24;
    const mins = parseInt(totalSeconds / 60) % 60;
    const seconds = parseInt(totalSeconds) % 60;
    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secsElement.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown,1000);

