import { createGameBoard, getGrid } from "./gameboard";
import { initializeShips, getShips } from "./ship";

createGameBoard();
initializeShips();
console.log(getShips());
console.table(getGrid());
