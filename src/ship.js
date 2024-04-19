const allShips = [];
const width = 10;

class Ship {
  constructor(name, length, hits, location) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  removeHitLocation(coordinates) {
    location = this.getLocation();
    this.location = location.splice(location.indexOf(coordinates), 1);
  }
  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits == this.length) {
      console.log("sunk!");
    }
  }
}

function setShips(gameboard) {
  let ships = [];
  ships.push(createShips("Carrier", 5, gameboard));
  ships.push(createShips("Battleship", 4, gameboard));
  ships.push(createShips("Destroyer", 3, gameboard));
  ships.push(createShips("Submarine", 3, gameboard));
  ships.push(createShips("Patrol Boat", 2, gameboard));
  return ships;
}

function placeShip(name, length, gameboard) {
  const location = [];
  //Directions - 0 is Right, 1 is Down, 2 is Left, 3 is Up
  const directions = { 0: [1, 0], 1: [0, 1], 2: [-1, 0], 3: [0, -1] };
  let grid = gameboard.getGrid();
  while (true) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);
    let direction = Math.floor(Math.random() * 4);
    // console.log(grid[x][y]);
    // console.log(`x is ${x}, y is ${y}, direction is ${direction}, length is ${length}`);
    if (grid[x][y] == 0) {
      location.push([x, y]);
      for (let i = 1; i <= length - 1; i++) {
        x += directions[direction][0];
        y += directions[direction][1];
        location.push([x, y]);
        // console.log(`x is ${x}, y is ${y}`);
        if (x < 0 || y < 0 || x > 9 || y > 9 || grid[x][y] != 0) {
          // console.log("broke");
          location.length = 0;
          break;
        }
      }
      if (location.length != 0) {
        gameboard.setGrid(location, name);
        return location;
      }
    }
  }
}

function createShips(name, length, gameboard) {
  const location = placeShip(name, length, gameboard);
  const ship = new Ship(name, length, 0, location);
  return ship;
}

function getShips() {
  return allShips;
}

export { createShips, setShips, getShips, placeShip };
