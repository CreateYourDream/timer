const startStopButton = document.querySelector(".timer-start");
const resetButton = document.querySelector(".timer-reset");
const circlButton = document.querySelector(".timer-circl");

const MINUTESELEM = document.querySelector(".timer-minutes");
const SECONDSELEM = document.querySelector(".timer-seconds");
const MILISECONDSELEM = document.querySelector(".timer-miliseconds");
const MARKLISTELEM = document.querySelector('.timer__marks-list')
const timerUnits = document.querySelector('.timer-units')
const timerUlElem = document.querySelector('.timer__marks-list')

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let state = false;

function startsTimer() {
  state = !state;

  if (state == true) {
    timeInterval = setInterval(runTime, 10);
    changeStartStopButton()
  } else {
    clearInterval(timeInterval);
    changeStartStopButton()
  }
}
function runTime() {
  miliseconds++;

  miliseconds > 9
    ? (MILISECONDSELEM.innerHTML = miliseconds)
    : (MILISECONDSELEM.innerHTML = "0" + miliseconds);

  if (miliseconds > 59) {
    miliseconds = 0;
    seconds++;
    seconds > 9
      ? (SECONDSELEM.innerHTML = seconds)
      : (SECONDSELEM.innerHTML = "0" + seconds);
  }
  if (seconds > 59) {
    seconds = 0;
    minutes++;
    minutes > 9
      ? (MINUTESELEM.innerHTML = minutes)
      : (MINUTESELEM.innerHTML = "0" + minutes);
  }
}
function changeStartStopButton() {
  state === true 
  ? startStopButton.innerHTML = 'stop'
  : startStopButton.innerHTML = 'start'

}
function buildList() {
  const markerLiElement = document.createElement('li')
  markerLiElement.innerHTML = `${timerUnits.innerText}`
  markerLiElement.classList.add('timer__marks-list-item')
  markerLiElement.classList.add('timer__marks-list-item--active')

  timerUlElem.prepend(markerLiElement)

  
}



startStopButton.addEventListener("click", startsTimer);

resetButton.addEventListener("click", () => {
  clearInterval(timeInterval);
  state = false;
  changeStartStopButton()
  MILISECONDSELEM.innerHTML = "00";
  SECONDSELEM.innerHTML = "00";
  MINUTESELEM.innerHTML = "00";
});

circlButton.addEventListener("click", buildList);

