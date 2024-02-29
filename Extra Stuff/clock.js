let initialTime = { hours: 0, minutes: 0, seconds: 0 };
let tickRate = { hours: 0, minutes: 0, seconds: 1 };

function setInitialTime() {
  initialTime.hours = parseInt(document.getElementById('initialHours').value);
  initialTime.minutes = parseInt(document.getElementById('initialMinutes').value);
  initialTime.seconds = parseInt(document.getElementById('initialSeconds').value);
  updateTime();
}

function setTickRate() {
  tickRate.hours = parseInt(document.getElementById('tickHours').value);
  tickRate.minutes = parseInt(document.getElementById('tickMinutes').value);
  tickRate.seconds = parseInt(document.getElementById('tickSeconds').value);
}

function updateTime() {
  let currentTime = new Date();
  currentTime.setHours(initialTime.hours);
  currentTime.setMinutes(initialTime.minutes);
  currentTime.setSeconds(initialTime.seconds);

  document.getElementById('clock').innerText = currentTime.toLocaleTimeString();
  
  // Update time based on tick rate
  initialTime.seconds += tickRate.seconds;
  initialTime.minutes += Math.floor(initialTime.seconds / 60) * tickRate.minutes;
  initialTime.hours += Math.floor(initialTime.minutes / 60) * tickRate.hours;

  initialTime.seconds %= 60;
  initialTime.minutes %= 60;
  initialTime.hours %= 24;
}

function startClock() {
  setInterval(updateTime, 1000); // Update every second
}

startClock();