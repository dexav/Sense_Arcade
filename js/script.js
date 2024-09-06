document.getElementById('catchCatGo').addEventListener('click', function() {
    const catchCatBlock = document.getElementById('centerCatBlock');
    if (catchCatBlock) {
        catchCatBlock.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('reactionGo').addEventListener('click', function() {
    const reactBlock = document.getElementById('centerReactBlock');
    if (reactBlock ) {
        reactBlock .scrollIntoView({ behavior: 'smooth' });
    }
});
