// Declaring all the element variables
const startbtnEl = document.querySelector("#startbtn");
const stopbtnEl = document.querySelector("#stopbtn");
const resetbtnEl = document.querySelector("#resetbtn");
const secondEl = document.querySelector("#second");
const centisecondEl = document.querySelector("#centisecond");

let second = 0;
let centisecond = 0;
let interval;

// click event for starting the timer
startbtnEl.addEventListener('click', () => {
    // calling the interval at every 10 milliseconds so that it completes 100 centiseconds for 1 second
    interval = setInterval(() => {
        startTimer();
    }, 10);
});

// click event for stopping the timer
stopbtnEl.addEventListener('click', ()=>{
    clearInterval(interval);
});

// click event for restarting the timer
resetbtnEl.addEventListener('click', () => {
    clearInterval(interval);
    centisecond = "00";
    second = "00";
    secondEl.innerHTML = second;
    centisecondEl.innerHTML = centisecond;
});

// Creating function to be called when the timer has started
function startTimer(){
    centisecond++;
    if(centisecond <= 9){
        centisecondEl.innerHTML = '0' + centisecond;
    }
    else if(centisecond > 9){
        centisecondEl.innerHTML = ''+centisecond;
    }
    else if(centisecond > 99){
        second = second + 1;
        if(second<=9){
            secondEl.innerHTML = '0'+second;
        }
        else if(second>9){
            secondEl.innerHTML = ''+second;
        }
        centisecond = 0;
        centisecondEl.innerHTML = '0'+centisecond;
    }
}


