let startTime, endTime;
let reactionHighscore = Infinity;
const reactionGameArea = document.getElementById("reactionGameArea");
const reactionTimeDisplay = document.getElementById("reactionTime");
const highscoreDisplay = document.getElementById("highscore");
const startButton = document.getElementById("startReactionButton");

startButton.addEventListener("click", () => {
  startReactionGame();
});

function startReactionGame() {
  const areaWidth = reactionGameArea.clientWidth;
  const areaHeight = reactionGameArea.clientHeight;

  startTime = new Date().getTime();
}
