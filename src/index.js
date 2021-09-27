import wrapCreateShips from './Ship/wrapCreateShips';
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

const refObj = {
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
};

const displayController = DisplayController(refObj);

const handleAttack = (e) => {
  const target = e.target.closest('[data-coords]');
  if (player.isTurn && target) player.attack(target.dataset.coords);
};

const checkEnd = ({ player1, player2 }) => {
  const players = [player1, player2];
  const loser = players.find(({ board }) => board.isAllSunk());

  if (loser) return players.find((curr) => curr !== loser);
  return false;
};

const handleEnd = (winner) => {
  console.log(winner);
  winner.player.switchTurn();
};

const dragstartHandler = (e) => {
  e.dataTransfer.setData('text/plain', e.target.dataset.index);
};

const shipsPlayer1 = {
  shipsArray: wrapCreateShips().map((ship, index) => ({ ship, pos: [`p${index}`] })),
  cacheDOM: document.querySelector('.ship-port'),
};

displayController.displayShips(shipsPlayer1);
domPlayer1.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
});
domPlayer1.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  console.log(e.target);
});

const shipsDiv = document.querySelectorAll('[data-index]');
shipsDiv.forEach((div) => {
  div.addEventListener('dragstart', dragstartHandler);
});

player.attack('a1');
player.attack('b3');
player.attack('d6');

player.attack('a9');
player.attack('b8');
player.attack('d2');

displayController.updateDisplay();

document.addEventListener('receivedAttack', () => {
  displayController.updateDisplay();

  const winner = checkEnd(refObj);
  if (!winner) {
    player.switchTurn();
    cpu.switchTurn();
  } else handleEnd(winner);
});

domPlayer2.addEventListener('click', (e) => handleAttack(e));
