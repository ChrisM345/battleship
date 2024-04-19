import { getPlayer } from ".";

let computerAvailableMoves = [];

function getComputerAvailableMoves() {
  return computerAvailableMoves;
}

function setComputerAvailableMoves(x, y) {
  computerAvailableMoves.push([x, y]);
}

function computerMove() {
  const move = Math.floor(Math.random() * computerAvailableMoves.length);
  console.log(computerAvailableMoves[move]);
  const coordinates = computerAvailableMoves[move];
  console.log(getPlayer());
  getPlayer().gameboard.receiveAttack(`${coordinates[0]}-${coordinates[1]}`);
  computerAvailableMoves.splice(move, 1);
}

export { setComputerAvailableMoves, getComputerAvailableMoves, computerMove };
