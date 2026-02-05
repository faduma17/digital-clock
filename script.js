// Variable to control 12h/24h format
let is24Hour = false;

// Function update time
function updateClock() {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    const now = new Date(); // Waqtiga hadda

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = "";

    // 12h vs 24h format
    if (!is24Hour) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 -> 12
    }

    // Ku dar zero horta haddii < 10
    const hh = hours < 10 ? "0" + hours : hours;
    const mm = minutes < 10 ? "0" + minutes : minutes;
    const ss = seconds < 10 ? "0" + seconds : seconds;

    // DOM update
    clockElement.textContent = `${hh}:${mm}:${ss} ${!is24Hour ? ampm : ""}`;

    // Update-date
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 0-11 → 1-12
    const day = now.getDate();
    const mmth = month < 10 ? "0" + month : month;
    const dd = day < 10 ? "0" + day : day;
    dateElement.textContent = `${year}-${mmth}-${dd}`;
}

// Button event: change 12h ↔ 24h
document.getElementById("toggleFormatBtn").addEventListener("click", () => {
    is24Hour = !is24Hour;
    updateClock(); // Update degdeg ah
});

// Update the time every second
setInterval(updateClock, 1000);

// Call initial to the clock
updateClock();
 
