import { getCurrentPlayer } from ".";
import { setComputerAvailableMoves } from "./computerlogic";

function displayGameboards(player) {
  if (player.name != "computer") {
    const playerGameboard = document.querySelector(".player-gameboard");
    player.gameboard.grid.forEach((arr, coordX) => {
      arr.forEach((element, coordY) => {
        const box = document.createElement("div");
        if (element == 0) {
          box.classList.add("player", "box", "zero");
        }
        if (element != 0) {
          box.classList.add("player", "box", "ship");
        }
        box.id = `player-${coordX}-${coordY}`;
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
        box.id = `computer-${coordX}-${coordY}`;
        setComputerAvailableMoves(coordX, coordY);
        box.addEventListener(
          "click",
          (e) => {
            const coordinates = e.target.id.substring(e.target.id.indexOf("-") + 1);
            console.log(coordinates);
            player.gameboard.receiveAttack(coordinates);
          },
          { once: true }
        );
        computerGameboard.append(box);
      });
    });
  }
}

function displayChat(status) {
  const player = getCurrentPlayer();
  const timestamp = new Date().toLocaleTimeString();
  const chatlog = document.querySelector(".chat-log-message");
  chatlog.innerText = `${timestamp}: ${player.name} ${status} enemy ship!\n` + chatlog.innerText;
}

export { displayGameboards, displayChat };
