import { displayChat } from "./interface";
import { getCurrentPlayer, updatePlayerIndex } from ".";
import { getComputerAvailableMoves, computerMove } from "./computerlogic";

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

  receiveAttack(coordinates) {
    const [x, y] = coordinates.split("-");
    console.log(this);
    if (this.grid[x][y] != 0) {
      console.log("hit!");
      const hit = document.getElementById(`${this.name}-${coordinates}`);
      hit.classList.add("hit");
      displayChat("hit");
      if (getCurrentPlayer().name == "computer") {
        computerMove();
      }
    } else {
      const miss = document.getElementById(`${this.name}-${coordinates}`);
      miss.classList.add("miss");
      displayChat("missed");
      updatePlayerIndex();
      if (getCurrentPlayer().name == "computer") {
        console.log("computers turn");
        console.log(getComputerAvailableMoves().length);
        computerMove();
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
