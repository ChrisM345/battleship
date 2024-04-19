function displayGameboards(player) {
  if (player.name != "computer") {
    const playerGameboard = document.querySelector(".player-gameboard");
    player.gameboard.grid.forEach((arr) => {
      arr.forEach((element) => {
        const box = document.createElement("div");
        if (element == 0) {
          box.classList.add("player", "box", "zero");
        }
        if (element != 0) {
          box.classList.add("player", "box", "ship");
        }
        playerGameboard.append(box);
      });
    });
  } else {
    const computerGameboard = document.querySelector(".computer-gameboard");
    player.gameboard.grid.forEach((arr, coordX) => {
      arr.forEach((element, coordY) => {
        const box = document.createElement("div");
        if (element == 0) {
          box.classList.add("computer", "box", "zero");
        }
        if (element != 0) {
          box.classList.add("computer", "box", "ship");
        }
        box.id = `${coordX}-${coordY}`;
        box.addEventListener("click", (e) => {
          const coordinates = e.target.id;
          player.gameboard.receiveAttack(coordinates);
        });
        computerGameboard.append(box);
      });
    });
  }
}

export { displayGameboards };
