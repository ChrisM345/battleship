let grid;

function createGameBoard() {
  const width = 10;
  grid = Array.from(Array(width), () => new Array(width).fill(0));
  return grid;
}

function getGrid() {
  return grid;
}

function setGrid(coordinates) {
  console.log("do something!");
  coordinates.forEach((element) => {
    console.log(element);
    const x = element[0];
    const y = element[1];
    grid[x][y] = 1;
  });
}

export { createGameBoard, getGrid, setGrid };
