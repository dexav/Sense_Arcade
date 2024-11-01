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
  reactionGameArea.style.backgroundColor = "red"; // Set the area to red initially

  const randomDelay = Math.floor(Math.random() * 3000) + 2000; // Random delay between 1 and 3 seconds
  setTimeout(() => {
    reactionGameArea.style.backgroundColor = "green"; // Turn green after the delay
    startTime = new Date().getTime(); // Start the timer

    reactionGameArea.addEventListener("click", stopReactionGame); // Add click event listener
  }, randomDelay);
}

function stopReactionGame() {
  if (reactionGameArea.style.backgroundColor === "green") {
    endTime = new Date().getTime(); // Stop the timer
    const reactionTime = endTime - startTime;
    reactionTimeDisplay.textContent = `${reactionTime}`;

    if (reactionTime < reactionHighscore) {
      reactionHighscore = reactionTime;
      highscoreDisplay.textContent = `${reactionHighscore}`;
    }

    reactionGameArea.style.backgroundColor = "red"; // Reset the area color to red
    reactionGameArea.removeEventListener("click", stopReactionGame);
  }
}
