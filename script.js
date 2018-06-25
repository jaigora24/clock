const handSeconds = document.querySelector('.clock__seconds');
const handMinutes = document.querySelector('.clock__minutes');
const handHours = document.querySelector('.clock__hour');

function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    handSeconds.style.transform = 'rotate('+ secondsDegrees +'deg)';
    handMinutes.style.transform = 'rotate('+ minutesDegrees +'deg)';
    handHours.style.transform = 'rotate('+ hoursDegrees +'deg)';
}

setDate();
setInterval(setDate, 1000);

