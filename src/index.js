import wrapShip from './Ship/wrapShip';
import Gameboard from './Gameboard/Gameboard';
import Player from './Player/Player';
import DisplayController from './DisplayController/DisplayController';
import './main.css';

const domPlayer1 = document.querySelector('.board_player1');
const domPlayer2 = document.querySelector('.board_player2');

const boardPlayer1 = Gameboard();
const boardPlayer2 = Gameboard();

const player = Player({
  name: 'Human',
  isHuman: true,
  starts: true,
  self: boardPlayer1,
  enemy: boardPlayer2,
});

const cpu = Player({
  name: 'The Computer',
  isHuman: false,
  starts: false,
  self: boardPlayer2,
  enemy: boardPlayer1,
});

const displayController = DisplayController({
  player1: {
    player,
    board: boardPlayer1,
    cacheDOM: domPlayer1,
  },
  player2: {
    player: cpu,
    board: boardPlayer2,
    cacheDOM: domPlayer2,
  },
});

displayController.setupBoards();

boardPlayer1.placeShip({
  ship: wrapShip.carrier({ isHorizontal: true }),
  row: 1,
  column: 'b',
});
boardPlayer1.placeShip({
  ship: wrapShip.battleship({ isHorizontal: true }),
  row: 3,
  column: 'd',
});
boardPlayer1.placeShip({
  ship: wrapShip.cruiser({ isHorizontal: true }),
  row: 7,
  column: 'f',
});

boardPlayer2.placeShip({
  ship: wrapShip.carrier({ isHorizontal: false }),
  row: 1,
  column: 'a',
});
boardPlayer2.placeShip({
  ship: wrapShip.battleship({ isHorizontal: false }),
  row: 3,
  column: 'b',
});
boardPlayer2.placeShip({
  ship: wrapShip.destroyer({ isHorizontal: false }),
  row: 5,
  column: 'd',
});

player.attack('a1');
player.attack('b3');
player.attack('d6');

player.attack('a9');
player.attack('b8');
player.attack('d2');

displayController.updateDisplay();
