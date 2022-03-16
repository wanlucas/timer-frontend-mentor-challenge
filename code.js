
const daysHTML = document.getElementById('days');
const hoursHTML = document.getElementById('hours');
const minutesHTML = document.getElementById('minutes');
const secondsHTML = document.getElementById('seconds');

var timer = {'days' : 14, 'hours' : 0, 'minutes' : 0, 'seconds' : 0};

setInterval(() => {
    updateTime()
},1000);

function updateTime() {
    if(timer.seconds > 0) timer.seconds--
    else {
         timer.seconds = 59;
         if(timer.minutes > 0) timer.minutes--
         else {
            timer. minutes = 59;
             if(timer.hours > 0)timer.hours--
             else {
                 timer.hours = 23;
                 if(timer.days > 0) timer.days--
                 else Finished();
             }
         }
    }
    updateScreenTime();
}

function updateScreenTime() {
    document.querySelectorAll('.time-box').forEach(e=>{
        e.querySelector('.sheet.front p').innerText = timer[e.id];
        e.querySelector('.sheet.top p').innerText = timer[e.id];
        e.querySelector('.sheet.bottom p').innerText = timer[e.id] - 1;
    })
}