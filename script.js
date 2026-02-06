const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const formatSelect = document.getElementById("format");
const feedback = document.getElementById("feedback");
const themeBtn = document.getElementById("themeBtn");

let isLight = false;

// Update Clock Function
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const format = formatSelect.value;

  // Input validation
  if (format === "") {
    feedback.innerText = "❌ Please select time format";
    return;
  }

  let ampm = "";

  if (format === "12") {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
  }

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}${ampm}`;
  dateEl.innerText = now.toDateString();

  feedback.innerText = "✅ Clock running correctly";
}

// Event handling
formatSelect.addEventListener("change", updateClock);

// Theme change
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  isLight = !isLight;
  feedback.innerText = isLight
    ? "🌞 Light theme activated"
    : "🌙 Dark theme activated";
});

// Auto update every second
setInterval(updateClock, 1000);

