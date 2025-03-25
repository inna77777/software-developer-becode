/** @format */

// TODO: Exercise 1: Timezones and Current Time
const getTimeInTimezones = () => {
  const timezones = {
    Anchorage: "America/Anchorage",
    Reykjavik: "Atlantic/Reykjavik",
    "Saint-Petersburg": "Europe/Moscow",
    Brussels: "Europe/Brussels",
  };

  const timeContainer = document.getElementById("timezones");
  timeContainer.innerHTML = "";

  Object.entries(timezones).forEach(([city, tz]) => {
    const time = new Date().toLocaleString("en-US", { timeZone: tz });
    const p = document.createElement("p");
    p.textContent = `${city}: ${time}`;
    timeContainer.appendChild(p);
  });
};

// TODO: Exercise 2: Days Since Birth
const daysSinceBirth = (birthdate) => {
  const birthTime = new Date(birthdate).getTime();
  const now = Date.now();
  const daysPassed = Math.floor((now - birthTime) / (1000 * 60 * 60 * 24));

  document.getElementById(
    "daysSinceBirth"
  ).textContent = `Days since birth: ${daysPassed}`;
};

// TODO: Exercise 3: Future Time Calculation
const futureTime = (hours) => {
  const futureDate = new Date(Date.now() + hours * 3600000);
  return futureDate.toLocaleString();
};

document.addEventListener("DOMContentLoaded", function () {
  getTimeInTimezones();
  daysSinceBirth("2004-01-20");

  const output = document.getElementById("futureDate");
  const input = document.getElementById("hoursInput");

  let defaultHours = 80000;
  output.textContent = `Date in ${defaultHours} hours: ${futureTime(
    defaultHours
  )}`;

  input.addEventListener("input", function () {
    let hours = parseInt(input.value, 10);
    if (!isNaN(hours)) {
      output.textContent = `Date in ${hours} hours: ${futureTime(hours)}`;
    } else if (input.value === "") {
      output.textContent = `Date in ${defaultHours} hours: ${futureTime(
        defaultHours
      )}`;
    } else {
      output.textContent = "Enter a valid number.";
    }
  });
});

// TODO: Exercise 4: Calendar picture
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let is24HourFormat = true;

const updateTime = () => {
  const now = new Date();

  document.getElementById("day").textContent = dayNames[now.getDay()];
  document.getElementById("date").textContent = String(now.getDate()).padStart(
    2,
    "0"
  );
  document.getElementById("month").textContent = monthNames[now.getMonth()];
  document.getElementById("year").textContent = now.getFullYear();

  let hours = now.getHours();
  if (!is24HourFormat) {
    hours = hours % 12 || 12;
  }
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
};

document.getElementById("clock").addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  updateTime();
});

setInterval(updateTime, 1000);
updateTime();
