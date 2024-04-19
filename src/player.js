class Player {
  constructor(name, gameboard, ships, totalShips) {
    this.name = name;
    this.gameboard = gameboard;
    this.ships = ships;
    this.totalShips = totalShips;
  }
}

function createPlayer(name, gameboard, ships) {
  return new Player(name, gameboard, ships, 5);
}

export { createPlayer };
