import { displayChat } from "./interface";
import { getCurrentPlayer, updatePlayerIndex, getEnemy } from ".";
import { computerMove } from "./computerlogic";

let grid;
const computerDelay = 1000;

class Gameboard {
  constructor(name, grid) {
    this.name = name;
    this.grid = grid;
  }

  getGrid() {
    return this.grid;
  }

  setGrid(coordinates, name) {
    coordinates.forEach((element) => {
      const x = element[0];
      const y = element[1];
      this.grid[x][y] = name;
    });
  }

  //Takes coordinates and checks grid to see ship was hit
  receiveAttack(x, y) {
    if (this.grid[x][y] != 0) {
      //Ship was hit
      const hit = document.getElementById(`${this.name}-${x}-${y}`);
      hit.classList.add("hit"); //Add class hit to update box color
      displayChat("hit", this.grid[x][y]);

      const shipIndex = getEnemy().ships.findIndex((name) => name.name === this.grid[x][y]);
      getEnemy().ships[shipIndex].removeHitLocation([+x, +y]); //Remove the hit spot from the ship

      if (getCurrentPlayer().name == "computer") {
        setTimeout(computerMove, computerDelay); //Add delay for computer's turn
      }
    } else {
      const miss = document.getElementById(`${this.name}-${x}-${y}`);
      miss.classList.add("miss"); //Add class miss to update box color
      displayChat("missed");
      updatePlayerIndex(); //Switch turn
      if (getCurrentPlayer().name == "computer") {
        setTimeout(computerMove, computerDelay); //Add delay for computer's turn
      }
    }
  }
}
function createGameboard(player) {
  const width = 10;
  grid = Array.from(Array(width), () => new Array(width).fill(0));
  return new Gameboard(player, grid);
}

export { createGameboard };
