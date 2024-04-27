import { createGameboard } from "./gameboard";
import { setShips } from "./ship";
import { createPlayer } from "./player";
import { displayGameboards } from "./interface";
import { resetComputerMoves } from "./computerlogic";
import "./style.css";

let currPlayerIndex = 0;
let players = [];
const status = document.querySelector(".status");
const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  startGame();
});

function startGame() {
  const playerGameboard = createGameboard("player");
  const computerGameboard = createGameboard("computer");
  const playerShips = setShips(playerGameboard);
  const computerShips = setShips(computerGameboard);
  const player = createPlayer("player", playerGameboard, playerShips);
  const computer = createPlayer("computer", computerGameboard, computerShips);
  displayGameboards(player);
  displayGameboards(computer);
  players = [player, computer];
  updateStatusTurn();
}

function restartGame() {
  currPlayerIndex = 0;
  const resetPlayerGameboard = document.querySelector(".player-gameboard");
  const resetComputerGameboard = document.querySelector(".computer-gameboard");
  resetPlayerGameboard.innerHTML = "";
  resetComputerGameboard.innerHTML = "";

  const resetChatlog = document.querySelector(".chat-log-message");
  resetChatlog.innerHTML = "";

  resetComputerMoves();
  startGame();
}

function updatePlayerIndex() {
  currPlayerIndex == 0 ? (currPlayerIndex = 1) : (currPlayerIndex = 0);
  updateStatusTurn();
}

function setIndexToPlayer() {
  currPlayerIndex = 0;
}

function getCurrentPlayer() {
  return players[currPlayerIndex];
}

function getEnemy() {
  if (currPlayerIndex == 0) {
    return players[1];
  } else {
    return players[0];
  }
}

function updateStatusTurn() {
  let currPlayer = getCurrentPlayer().name;
  currPlayer = currPlayer.charAt(0).toUpperCase() + currPlayer.slice(1);
  status.innerHTML = `${currPlayer}'s turn`;
}

function updateStatusWin() {
  let currPlayer = getCurrentPlayer().name;
  currPlayer = currPlayer.charAt(0).toUpperCase() + currPlayer.slice(1);
  console.log(currPlayer);
  status.innerHTML = `${currPlayer} Won!`;
}

function getPlayer() {
  return players[0];
}

export { updatePlayerIndex, getCurrentPlayer, getPlayer, getEnemy, restartGame, updateStatusWin, setIndexToPlayer };
