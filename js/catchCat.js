let score = 0;
let gameTime = 30;
let timerInterval;
const catchCatBlock = document.querySelector('.catchCatBlock'); // Area catch Game
const highscore = document.getElementById('catchHighscore');
const catImage = document.getElementById('catchCatImage');

function catchGame() {
    const areaWidth = catchCatBlock.clientWidth;  // Breite des Fangspiel-Bereichs
    const areaHeight = catchCatBlock.clientHeight; // Höhe des Fangspiel-Bereichs

    // Generiere eine zufällige Position innerhalb des Fangspiel-Bereichs
    const randomX = Math.random() * (areaWidth - 100);  // 100 ist die geschätzte Bildbreite
    const randomY = Math.random() * (areaHeight - 100); // 100 ist die geschätzte Bildhöhe
    console.log(randomX, randomY);

    // Setze die Position des Bildes
    catImage.style.position = 'absolute';  // Stelle sicher, dass das Bild absolut positioniert ist
    catImage.style.left = randomX + 'px';  // Setze die X-Koordinate
    catImage.style.top = randomY + 'px';   // Setze die Y-Koordinate
}

function startCatchGame() {
    score = 0;  
    highscore.textContent = 'Score: ' + score;  
    catchGame();  
    timerInterval = setInterval(() => {
        gameTime--;
        if (gameTime <= 0) {
            clearInterval(timerInterval);
            alert('Zeit ist abgelaufen!');            
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    catImage.addEventListener('click', () => {
        score++;  // Erhöhe den Score
        highscore.textContent = 'Score: ' + score;  // Aktualisiere den Highscore
        catchGame();  // Bewege das Bild erneut an eine zufällige Position
    });
});
