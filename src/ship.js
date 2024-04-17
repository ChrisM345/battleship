import { getGrid, setGrid } from "./gameboard";

const allShips = [];
const width = 10;

class Ship {
  constructor(name, length, hits, location) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.location = location;
  }
}

function initializeShips() {
  console.log("create ships");
  createShips("Carrier", 5);
  createShips("Battleship", 4);
  createShips("Destroyer", 3);
  createShips("Submarine", 3);
  createShips("Patrol Boat", 2);
}

function placeShip(length) {
  const location = [];
  //Directions - 0 is Right, 1 is Down, 2 is Left, 3 is Up
  const directions = { 0: [1, 0], 1: [0, 1], 2: [-1, 0], 3: [0, -1] };
  let grid = getGrid();
  while (true) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);
    let direction = Math.floor(Math.random() * 4);
    console.log(grid[x][y]);
    console.log(`x is ${x}, y is ${y}, direction is ${direction}, length is ${length}`);
    if (grid[x][y] == 0) {
      location.push([x, y]);
      for (let i = 1; i <= length - 1; i++) {
        x += directions[direction][0];
        y += directions[direction][1];
        location.push([x, y]);
        console.log(`x is ${x}, y is ${y}`);
        if (x < 0 || y < 0 || x > 9 || y > 9 || grid[x][y] != 0) {
          console.log("broke");
          location.length = 0;
          break;
        }
      }
      if (location.length != 0) {
        setGrid(location);
        console.log("yes!");
        return location;
      }
    }
  }
}

function createShips(name, length) {
  const location = placeShip(length);
  const ship = new Ship(name, length, 0, location);
  allShips.push(ship);
  return ship;
}

function getShips() {
  return allShips;
}

export { createShips, initializeShips, getShips };
