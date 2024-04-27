import { displayChat } from "./interface";
import { getCurrentPlayer, updatePlayerIndex, getEnemy } from ".";
import { computerMove } from "./computerlogic";

let grid;

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

  receiveAttack(x, y) {
    console.log(x);
    console.log(y);
    if (this.grid[x][y] != 0) {
      const hit = document.getElementById(`${this.name}-${x}-${y}`);
      hit.classList.add("hit");
      displayChat("hit", this.grid[x][y]);

      const shipIndex = getEnemy().ships.findIndex((name) => name.name === this.grid[x][y]);
      getEnemy().ships[shipIndex].removeHitLocation([+x, +y]);

      if (getCurrentPlayer().name == "computer") {
        setTimeout(computerMove, 1500);
      }
    } else {
      const miss = document.getElementById(`${this.name}-${x}-${y}`);
      miss.classList.add("miss");
      displayChat("missed");
      updatePlayerIndex();
      if (getCurrentPlayer().name == "computer") {
        setTimeout(computerMove, 1500);
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
