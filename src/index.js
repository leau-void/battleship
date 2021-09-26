import wrapShip from './Ship/wrapShip';
import Gameboard from './Gameboard/Gameboard';
import Player from './Player/Player';
import DisplayController from './DisplayController/DisplayController';

const boardPlayer = Gameboard();
const boardCPU = Gameboard();

const player = Player({
  name: 'Human',
  starts: true,
  self: boardPlayer,
  enemy: boardCPU,
});
const cpu = Player({
  name: 'The Computer',
  starts: false,
  self: boardCPU,
  enemy: boardPlayer,
});

const displayController = DisplayController({
  boards: {
    player: boardPlayer,
    cpu: boardCPU,
  },
  players: {
    player,
    cpu,
  },
});
