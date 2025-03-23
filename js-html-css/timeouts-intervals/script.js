/** @format */
// TODO: Exercise 1

// const typeWriter = () => {
//   const word = "Wozniak";
//   let index = 0;
//   const intervalId = setInterval(() => {
//     document.body.innerText += word[index];
//     index++;
//     if (index === word.length) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// typeWriter();

// TODO: Exercise 2
// const elapsedTime = () => {
//   let seconds = 0;
//   setInterval(() => {
//     seconds++;
//     let timeDisplay = seconds;

//     if (seconds >= 60) {
//       const minutes = Math.floor(seconds / 60);
//       timeDisplay = `${minutes} minute${minutes > 1 ? "s" : ""} has passed`;
//     }

//     document.body.innerText = timeDisplay;
//   }, 1000);
// }

// elapsedTime();

// TODO: Exercise 3

let score = 0;
let activeHole = null;
let gameInterval;
let timeLeft = 30;
let timerInterval;
let gameRunning = false;
let gameEnded = false;
let gameOverAlertShown = false;

const spawnMole = () => {
  if (!gameRunning) return;

  if (activeHole) {
    activeHole.textContent = "";
  }

  const holes = document.querySelectorAll(".hole");
  const randomHole = holes[Math.floor(Math.random() * holes.length)];

  randomHole.textContent = "🐭";

  randomHole.addEventListener("click", () => {
    if (gameRunning && randomHole.textContent === "🐭") {
      score++;
      document.getElementById("score").textContent = "Score: " + score;
      randomHole.textContent = "";
      activeHole = null;
    }
  });

  activeHole = randomHole;

  setTimeout(() => {
    if (randomHole.textContent === "🐭") {
      randomHole.textContent = "";
      activeHole = null;
    }
  }, 1000);
};

const startGame = () => {
  score = 0;
  timeLeft = 30;
  gameRunning = true;
  gameEnded = false;
  gameOverAlertShown = false;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("timer").textContent = "Time Left: 30s";

  document.getElementById("start-btn").style.display = "none";
  document.getElementById("stop-btn").style.display = "inline-block";

  clearInterval(gameInterval);
  clearInterval(timerInterval);

  gameInterval = setInterval(spawnMole, 1000);
  timerInterval = setInterval(() => {
    if (!gameRunning) return;

    timeLeft--;
    document.getElementById("timer").textContent =
      "Time Left: " + timeLeft + "s";

    if (timeLeft <= 0 && !gameOverAlertShown) {
      stopGame();
    }
  }, 1000);
};

const stopGame = () => {
  if (gameEnded) return;
  gameEnded = true;

  gameRunning = false;
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  if (activeHole) {
    activeHole.textContent = "";
  }

  if (!gameOverAlertShown) {
    alert("Game Over! Your final score is: " + score);
    gameOverAlertShown = true;
  }

  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("timer").textContent = "Time Left: 30s";

  document.getElementById("start-btn").style.display = "inline-block";
  document.getElementById("stop-btn").style.display = "none";
};

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("stop-btn").addEventListener("click", stopGame);
