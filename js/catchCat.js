let score = 0;
let timerInterval;
const catchCatBlock = document.querySelector(".catchCatBlock"); // Area catch Game
const catScore = document.getElementById("catchScore");
const catImage = document.getElementById("catchCatImage");
const catchHighscore = document.getElementById("catchHighscore");
const timer = document.getElementById("catchTimer");

let highscore = localStorage.getItem("catchHighscore") || 0;
catchHighscore.textContent = "Highscore: " + highscore;

function catchGame() {
  const areaWidth = catchCatBlock.clientWidth; // Breite des Fangspiel-Bereichs
  const areaHeight = catchCatBlock.clientHeight; // Höhe des Fangspiel-Bereichs

  // Generiere eine zufällige Position innerhalb des Fangspiel-Bereichs
  const randomX = Math.random() * (areaWidth - 200); // 100 ist die geschätzte Bildbreite
  const randomY = Math.random() * (areaHeight - 200); // 100 ist die geschätzte Bildhöhe

  // Setze die Position des Bildes
  catImage.style.position = "absolute"; // Stelle sicher, dass das Bild absolut positioniert ist
  catImage.style.left = randomX + "px"; // Setze die X-Koordinate
  catImage.style.top = randomY + "px"; // Setze die Y-Koordinate
}

function startCatchGame() {
  let gameTime = 5;
  timer.textContent = "Time: " + gameTime;
  catScore.textContent = "Score: " + score;
  catchGame();
  while (true) {
    timerInterval = setInterval(() => {
      gameTime--;
      timer.textContent = "Time: " + gameTime;
      console.log(gameTime);
      if (gameTime === 0) {
        clearInterval(timerInterval);
        catImage.style.display = "none";
        alert("Game Over! Your Score: " + score);
        if (score > highscore) {
          highscore = score;
          console.log(highscore);
          catchHighscore.textContent = "Highscore: " + highscore;
          localStorage.setItem("catchHighscore", highscore);
        }
        score = 0;
        catScore.textContent = "Score: " + score;
      }
    }, 1000);
    break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  catImage.addEventListener("click", () => {
    score++; // Erhöhe den Score
    catScore.textContent = "Score: " + score; // Aktualisiere den Highscore

    catchGame(); // Bewege das Bild erneut an eine zufällige Position
  });
});
