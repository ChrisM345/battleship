import { createGameboard } from "./gameboard";
import { setShips } from "./ship";
import { createPlayer } from "./player";
import { displayGameboards } from "./interface";
import "./style.css";

createGameboard();
// console.log(getShips());
// console.table(getGrid());

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
console.log(player);
console.log(computer);
displayGameboards(player);
displayGameboards(computer);
