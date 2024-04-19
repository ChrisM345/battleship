class Player {
  constructor(name, gameboard, ships) {
    this.name = name;
    this.gameboard = gameboard;
    this.ships = ships;
  }
}

function createPlayer(name, gameboard, ships) {
  return new Player(name, gameboard, ships);
}

export { createPlayer };
