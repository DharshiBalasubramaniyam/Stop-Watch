let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let start = document.getElementById('start');
let stopp = document.getElementById('stop');
let pause = document.getElementById('pause');
let h; let m; let s;

function setInitial() {
    h = 0;
    m = 0;
    s = 0;
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
}

setInitial();

function timer() {
    if (s<59) s++;
    else {
        s = 0;
        if(m<59) m++;
        else {
            m=0;
            h++;
        }
    }

    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;

}

let intervalId;

start.addEventListener('click', ()=> {
    intervalId = setInterval(timer, 1000);
    start.classList.add('hide');
    stopp.classList.remove('hide');
    pause.classList.remove('hide');
})

stopp.addEventListener('click', ()=> {
    clearInterval(intervalId);
    setInitial();
    start.classList.remove('hide');
    stopp.classList.add('hide');
    pause.classList.add('hide');
})

pause.addEventListener('click', ()=> {

    if (pause.textContent == "Pause") {
        clearInterval(intervalId);
        pause.textContent = "Resume";
    }
    else if (pause.textContent == "Resume") {
        intervalId = setInterval(timer, 1000);
        pause.textContent = "Pause";
    }
    
})