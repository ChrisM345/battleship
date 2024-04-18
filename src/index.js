import { createGameboard } from "./gameboard";
import { setShips } from "./ship";

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
