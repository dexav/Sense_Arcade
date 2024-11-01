let score = 0;
let timerInterval;
const catchCatBlock = document.querySelector(".catchCatBlock");
const catScore = document.getElementById("catchScore");
const catImage = document.getElementById("catchCatImage");
const catchHighscore = document.getElementById("catchHighscore");
const timer = document.getElementById("catchTimer");

let highscore = localStorage.getItem("catchHighscore") || 0;
catchHighscore.textContent = "Highscore: " + highscore;

function catchGame() {
  const areaWidth = catchCatBlock.clientWidth;
  const areaHeight = catchCatBlock.clientHeight;

  const randomX = Math.random() * (areaWidth - 200);
  const randomY = Math.random() * (areaHeight - 200);

  catImage.style.position = "absolute";
  catImage.style.left = randomX + "px";
  catImage.style.top = randomY + "px";
}

function spawnAdditionalCat() {
  const additionalCat = catImage.cloneNode(true);
  additionalCat.addEventListener("click", () => {
    score++;
    catScore.textContent = "Score: " + score;
    catchGameForCat(additionalCat);
  });

  catchCatBlock.appendChild(additionalCat);
  catchGameForCat(additionalCat);
}

function catchGameForCat(cat) {
  const areaWidth = catchCatBlock.clientWidth;
  const areaHeight = catchCatBlock.clientHeight;

  const randomX = Math.random() * (areaWidth - 200);
  const randomY = Math.random() * (areaHeight - 200);

  cat.style.left = randomX + "px";
  cat.style.top = randomY + "px";
}

function startCatchGame() {
  let gameTime = 30;
  timer.textContent = "Time: " + gameTime;
  catScore.textContent = "Score: " + score;
  catchGame();

  timerInterval = setInterval(() => {
    gameTime--;
    timer.textContent = "Time: " + gameTime;

    if (gameTime === 20) {
      spawnAdditionalCat();
    }

    if (gameTime === 0) {
      clearInterval(timerInterval);
      document.querySelectorAll(".catchCatBlock img").forEach(cat => cat.remove());
      alert("Game Over! Your Score: " + score);

      if (score > highscore) {
        highscore = score;
        catchHighscore.textContent = "Highscore: " + highscore;
        localStorage.setItem("catchHighscore", highscore);
      }
      score = 0;
      catScore.textContent = "Score: " + score;
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  catImage.addEventListener("click", () => {
    score++;
    catScore.textContent = "Score: " + score;
    catchGame();
  });
});
