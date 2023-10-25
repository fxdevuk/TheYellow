let time = 0;
let timeAdjust = "";
let started = 0;

let startTimer = (time) => {
    this.time = time * 60;
    document.getElementById('counter').innerHTML = timeConverter(this.time);
    if (started === 0) {
        started = 1;
        this.timeAdjust = setInterval(timeCounter, 1000);
        }   
}

let timeCounter = () => {
        this.time--;
        document.getElementById('counter').innerHTML = timeConverter(this.time);
            if (this.time === 0) {
                clearInterval(this.timeAdjust);
                started = 0;
                playAlarm('./sounds/alarm_eggtimer.wav');
                showEggReadyCard();
                hideCounter();  
            }  
}

let timeConverter = (converter) => {
    let minutes = Math.floor(converter / 60);
    let seconds = converter % 60;
    if (minutes < 10){
        minutes = "0" + minutes;

    }
    if (seconds < 10){
        seconds = "0" + seconds;

    }
    return `${minutes}:${seconds}`;
}

// card show/hide

let visibleCard = "";

function toggleShowCard(card) {
    let display = document.getElementById(card).className;
    // alert(display==='egg-invisible');
    // alert(display);
    let verifyVisibleCard = document.getElementById(visibleCard);
    // alert(verifyVisibleCard);
    if (verifyVisibleCard != null) {
        document.getElementById(visibleCard).className = 'egg-invisible';
    }

        if(display === 'egg-invisible') {
            visibleCard = card;
            document.getElementById(card).className = 'egg-visible';
        }
        else {           
        }   
}
 
// alarm

let alarmSound = document.getElementById("alarm-ready");

function playAlarm() {
    alarmSound.play();
}

function showEggReadyCard() {
   document.getElementById("ready").className = 'visible-egg-ready';
}

function hideCounter() {
    document.getElementById("counter").className = 'invisible-counter';
}

function reset() {
    location.reload();
}












