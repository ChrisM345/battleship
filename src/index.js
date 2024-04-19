import { createGameboard } from "./gameboard";
import { setShips } from "./ship";
import { createPlayer } from "./player";
import { displayGameboards } from "./interface";
import "./style.css";

let currPlayerIndex = 0;
let players = [];

const playerGameboard = createGameboard("player");
console.log(playerGameboard);
const computerGameboard = createGameboard("computer");
const playerShips = setShips(playerGameboard);
const computerShips = setShips(computerGameboard);
console.table(playerGameboard.getGrid());
console.log(playerShips);
console.table(computerGameboard.getGrid());
console.log(computerShips);

const player = createPlayer("player", playerGameboard, playerShips);
const computer = createPlayer("computer", computerGameboard, computerShips);
displayGameboards(player);
displayGameboards(computer);

function startGame() {
  let gameOver = false;
  players = [player, computer];
  console.log(players);
}

function updatePlayerIndex() {
  currPlayerIndex == 0 ? (currPlayerIndex = 1) : (currPlayerIndex = 0);
  console.log(currPlayerIndex);
}

function getCurrentPlayer() {
  return players[currPlayerIndex];
}

function getPlayer() {
  return players[0];
}

startGame();

export { updatePlayerIndex, getCurrentPlayer, getPlayer };
