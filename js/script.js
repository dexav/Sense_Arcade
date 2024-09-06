document.addEventListener('DOMContentLoaded', () => {
    const catchCatBlock = document.querySelector('.catchCatBlock');
    const reactionBlock = document.querySelector('.reactionBlock');
    const catchCatGo = document.getElementById('catchCatGo');
    const reactionGo = document.getElementById('reactionGo');

    catchCatGo.addEventListener('click', () => {
        catchCatBlock.style.display = 'flex';
        reactionBlock.style.display = 'none';
        document.querySelector('.selectGame').style.display = 'none';
        startCatchGame();  // Startet das Fangspiel
    });

    reactionGo.addEventListener('click', () => {
        reactionBlock.style.display = 'flex';
        catchCatBlock.style.display = 'none';
        document.querySelector('.selectGame').style.display = 'none';
        startReactionGame();  // Funktion für das Reaktionsspiel
    });
});

document.querySelectorAll('#catchBack button, #reactionBack button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.catchCatBlock').style.display = 'none';
        document.querySelector('.reactionBlock').style.display = 'none';
        document.querySelector('.selectGame').style.display = 'flex';
    });
});
