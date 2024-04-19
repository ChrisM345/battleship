let grid;

class Gameboard {
  constructor(name, grid) {
    this.name = name;
    this.grid = grid;
  }

  getGrid() {
    return this.grid;
  }

  setGrid(coordinates) {
    console.log("do something!");
    coordinates.forEach((element) => {
      const x = element[0];
      const y = element[1];
      this.grid[x][y] = 1;
    });
  }

  receiveAttack(x, y) {
    if (this.grid[x][y] == 1) {
      console.log("hit!");
    } else {
      console.log("miss");
    }
  }
}
function createGameboard(player) {
  const width = 10;
  grid = Array.from(Array(width), () => new Array(width).fill(0));
  return new Gameboard(player, grid);
}

// function getGrid() {
//   return grid;
// }

// function setGrid(coordinates) {
//   coordinates.forEach((element) => {
//     const x = element[0];
//     const y = element[1];
//     grid[x][y] = 1;
//   });
// }

export { createGameboard };
