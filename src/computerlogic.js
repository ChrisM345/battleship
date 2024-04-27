import { getPlayer } from ".";

let computerAvailableMoves = [];

function getComputerAvailableMoves() {
  return computerAvailableMoves;
}

function resetComputerMoves() {
  computerAvailableMoves.length = 0;
}

function setComputerAvailableMoves(x, y) {
  computerAvailableMoves.push([x, y]); //Simple logic for computer. Array of all 100 available moves
}

function computerMove() {
  const move = Math.floor(Math.random() * computerAvailableMoves.length);
  const coordinates = computerAvailableMoves[move];
  computerAvailableMoves.splice(move, 1);
  getPlayer().gameboard.receiveAttack(coordinates[0], coordinates[1]);
}

export { setComputerAvailableMoves, getComputerAvailableMoves, computerMove, resetComputerMoves };
