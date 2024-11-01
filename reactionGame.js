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
  reactionGameArea.style.backgroundColor = "red"; 

  const randomDelay = Math.floor(Math.random() * 3000) + 2000; 
  setTimeout(() => {
    reactionGameArea.style.backgroundColor = "green"; 
    startTime = new Date().getTime(); 

    reactionGameArea.addEventListener("click", stopReactionGame); 
  }, randomDelay);
}

function stopReactionGame() {
  if (reactionGameArea.style.backgroundColor === "green") {
    endTime = new Date().getTime(); 
    const reactionTime = endTime - startTime;               // Die Logik wie man die Zeit misst wurde mit Hilfe von ChatGPT erstellt
    reactionTimeDisplay.textContent = `${reactionTime}`;

    if (reactionTime < reactionHighscore) {
      reactionHighscore = reactionTime;
      highscoreDisplay.textContent = `${reactionHighscore}`;
    }

    reactionGameArea.style.backgroundColor = "red"; 
    reactionGameArea.removeEventListener("click", stopReactionGame);
  }
}
