const clock = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarmTime");
const message = document.getElementById("message");

let alarmTime = null;

// Clock Function
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clock.textContent = currentTime;

  if (alarmTime === `${hours}:${minutes}`) {
    message.textContent = "⏰ Alarm Time!";
  }
}

setInterval(updateClock, 1000);

// Set Alarm
document.getElementById("setAlarm").addEventListener("click", () => {
  if (alarmTimeInput.value === "") {
    message.textContent = "Please select alarm time!";
    return;
  }

  alarmTime = alarmTimeInput.value;
  message.textContent = "Alarm set successfully ✔";
});

// Clear Alarm
document.getElementById("clearAlarm").addEventListener("click", () => {
  alarmTime = null;
  message.textContent = "Alarm cleared ❌";
});