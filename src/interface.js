import { getCurrentPlayer, getEnemy, setIndexToPlayer, updateStatusWin, restartGame } from ".";
import { setComputerAvailableMoves } from "./computerlogic";

//Create player and computer grids
//Add Event Listeners to the  computer grid for the player to click on
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
        box.addEventListener("click", playerAttack);
        computerGameboard.append(box);
      });
    });
  }
}

function playerAttack(e) {
  //Prevents player from attacking after a delay to computer's turn was added
  if (getCurrentPlayer().name == "player") {
    sendAttack(e);
    e.target.removeEventListener("click", playerAttack);
  }
}

function displayChat(status, ship = "ship") {
  const player = getCurrentPlayer();
  const timestamp = new Date().toLocaleTimeString();
  const chatlog = document.querySelector(".chat-log-message");
  chatlog.innerText = `${timestamp}: ${player.name} ${status} enemy ${ship}!\n` + chatlog.innerText;
}

function sendAttack(e) {
  const coordinates = e.target.id.substring(e.target.id.indexOf("-") + 1);
  const x = coordinates[0];
  const y = coordinates[2]; //Skip '-'
  getEnemy().gameboard.receiveAttack(x, y);
}

function gameEnd() {
  updateStatusWin();
  if (getCurrentPlayer().name == "computer") {
    setIndexToPlayer(); //Prevent computer logic from continuing to run
  }
  removeEvents(); //Remove event listeners from computer's grid

  const status = document.querySelector(".status");
  const btn = document.createElement("button");
  const para = document.createElement("p");
  btn.className = "button";
  btn.innerText = "Restart Game";
  btn.addEventListener("click", () => {
    restartGame();
  });
  para.append(btn);
  status.append(para);
}

function removeEvents() {
  const computerGameboard = document.querySelector(".computer-gameboard");
  for (const child of computerGameboard.children) {
    child.removeEventListener("click", playerAttack);
  }
}

export { displayGameboards, displayChat, gameEnd };
