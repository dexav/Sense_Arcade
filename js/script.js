document.addEventListener("DOMContentLoaded", () => {
  const catchCatBlock = document.querySelector(".catchCatBlock");
  const reactionBlock = document.querySelector(".reactionBlock");
  const catchCatGo = document.getElementById("catchCatGo");
  const reactionGo = document.getElementById("reactionGo");
  const catchStart = document.getElementById("catchStart");

  catchCatGo.addEventListener("click", () => {
    catchCatBlock.style.display = "flex";
    reactionBlock.style.display = "none";
    document.getElementById("catchCatImage").style.display = "none";
    document.querySelector(".selectGame").style.display = "none";
  });

  catchStart.addEventListener("click", () => {
    catchCatBlock.style.display = "flex";
    document.querySelector(".selectGame").style.display = "none";
    document.getElementById("catchCatImage").style.display = "block";
    startCatchGame(); // Funktion für das Fang
  });

  reactionGo.addEventListener("click", () => {
    reactionBlock.style.display = "flex";
    catchCatBlock.style.display = "none";
    document.querySelector(".selectGame").style.display = "none";
    startReactionGame(); // Funktion für das Reaktionsspiel
  });
});

document
  .querySelectorAll("#catchBack button, #reactionBack button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".catchCatBlock").style.display = "none";
      document.querySelector(".reactionBlock").style.display = "none";
      document.querySelector(".selectGame").style.display = "flex";
    });
  });
